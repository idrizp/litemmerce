import "server-only";

import { Database } from "../supabase.types";
import Stripe from "stripe";
import { useServerSupabase } from "./supabase-server";
import { getImagesFromItem } from "./item-handler";

export type Item = Database["public"]["Tables"]["items"]["Row"];

export const stripeServer = new Stripe(
  process.env.STRIPE_SECRET_KEY as string,
  {
    apiVersion: "2022-11-15",
  }
);

export async function getProduct(item: Item) {
  try {
    return await stripeServer.products.retrieve(item.id);
  } catch (err) {
    return null;
  }
}

export async function createProductForItem(item: Item) {
  const product = await stripeServer.products.create({
    name: item.title,
    description: item.description,
    id: item.id,
    default_price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
    },
    images: getImagesFromItem(item),
    url: process.env.NEXT_PUBLIC_SITE_URL + "/shop/item/" + item.id,
  });
  const price = product.default_price;
  const paymentLink = await stripeServer.paymentLinks.create({
    line_items: [
      {
        price: price as string,
        quantity: item.min_stock,
        adjustable_quantity:
          item.max_stock > item.min_stock
            ? {
                minimum: item.min_stock,
                maximum: item.max_stock,
                enabled: true,
              }
            : {
                enabled: false,
              },
      },
    ],
  });
  const link = paymentLink.url;
  item.payment_link = link;
  await useServerSupabase()
    .from("items")
    .update({ payment_link: link })
    .eq("id", item.id);
  return product;
}
