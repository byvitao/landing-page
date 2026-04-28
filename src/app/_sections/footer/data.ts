import { revalidateNewYear } from "@/utils/revalidates"
import { cacheLife } from "next/cache"

export async function getYear() {
  "use cache";
  cacheLife({ revalidate: revalidateNewYear() });

  return new Date().getFullYear();
}