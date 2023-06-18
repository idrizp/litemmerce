import { BiShoppingBag } from "react-icons/bi";
import { List } from "./components/shop/list";
import { ItemProps } from "./components/shop/item";
import { useServerSupabase } from "./lib/server/supabase-server";
import { Database } from "./lib/supabase.types";
import { getImagesFromItem } from "./lib/server/item-handler";

async function listShoppingItems(): Promise<ItemProps[]> {
  const supabase = useServerSupabase();
  const res = await supabase.from("items").select("*, images");
  if (res.error) {
    throw res.error;
  }
  return res.data.map((item) => ({
    id: item.id,
    name: item.title,
    description: item.description,
    price: item.price,
    images: getImagesFromItem(item),
  }));
}

export default async function Home() {
  try {
    const shoppingItems = await listShoppingItems();
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold flex flex-row items-center gap-x-2 pb-5">
          litemmerce <BiShoppingBag />
        </h1>
        <List items={shoppingItems} />
      </main>
    );
  } catch (err) {
    console.error(err);
    return (
      <>
        <p>Something went wrong when listing the shopping items.</p>
      </>
    );
  }
}
