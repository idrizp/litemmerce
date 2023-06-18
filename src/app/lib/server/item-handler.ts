import "server-only";

import { Item } from "./stripe-handler";
import { useServerSupabase } from "./supabase-server";

export function getImagesFromItem(item: Item) {
  return item.images.map(
    (image) =>
      useServerSupabase().storage.from("item-images").getPublicUrl(image).data
        .publicUrl
  );
}
