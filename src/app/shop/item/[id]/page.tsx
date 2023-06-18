import { AddToCart } from "@/app/components/cart/add-to-cart";
import { Item, ItemProps } from "@/app/components/shop/item";
import { Button } from "@/app/components/ui/button";
import { Gallery } from "@/app/components/ui/gallery";
import { getImagesFromItem } from "@/app/lib/server/item-handler";
import {
  createProductForItem,
  getProduct,
} from "@/app/lib/server/stripe-handler";
import { useServerSupabase } from "@/app/lib/server/supabase-server";
import Link from "next/link";

async function getShoppingItem(id: string): Promise<ItemProps> {
  const supabase = useServerSupabase();
  const res = await supabase.from("items").select("*, images").eq("id", id);
  if (res.error) {
    throw res.error;
  }
  if (res.count == 0) {
    throw new Error("Item not found");
  }
  const item = res.data[0];
  // Create item in Stripe if it doesn't exist
  let product = await getProduct(item);
  if (!product) {
    product = await createProductForItem(item);
  }
  return {
    id: item.id,
    name: item.title,
    description: item.description,
    price: item.price,
    images: getImagesFromItem(item),
    purchaseUrl: item.payment_link || undefined,
  };
}
export default async function Page({ params }: { params: { id: string } }) {
  try {
    const item = await getShoppingItem(params.id);
    return (
      <main className="p-6 tracking-tighter space-y-5">
        <p className="text-5xl font-black pt-5">{item.name}</p>
        <Gallery images={item.images} />
        <p className="text-xl text-blue-400">Price: ${item.price}</p>
        <p className="text-white/75 max-w-xl text-lg">{item.description}</p>
        <AddToCart url={item.purchaseUrl} />
      </main>
    );
  } catch (err) {
    console.error(err);
    return (
      <>
        <main>
          <p>Item not found.</p>
          <Link href="/">
            <Button type="primary">Back to Shop</Button>
          </Link>
        </main>
      </>
    );
  }
}