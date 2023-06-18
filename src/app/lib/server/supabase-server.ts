import "server-only";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../supabase.types";

const serverSupabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export const useServerSupabase = () => serverSupabase;
