import { getFromApi } from "@/shared/api";
import { revalidateMidNight } from "@/utils/revalidates";
import { cacheLife } from "next/cache";

export interface ITestimonial {
  description: string;
  image: string;
}

export async function getTestimonials(): Promise<ITestimonial[]> {
  "use cache";
  cacheLife({ revalidate: revalidateMidNight() });

  const response = await getFromApi<ITestimonial[]>("/landing-page/testimonials", { next: { revalidate: 60 } });
  if (!response.success || !response.data) {
    return [];
  }

  return response.data;
}