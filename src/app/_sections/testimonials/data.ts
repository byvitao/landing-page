import { getFromApi } from "@/shared/api";

export interface ITestimonial {
  description: string;
  image: string;
}

export async function getTestimonials(): Promise<ITestimonial[]> {
  const response = await getFromApi<ITestimonial[]>("/landing-page/testimonials", { next: { revalidate: 60 } });
  if (!response.success || !response.data) {
    return [];
  }

  return response.data;
}