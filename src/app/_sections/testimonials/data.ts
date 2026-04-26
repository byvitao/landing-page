import { getFromApi } from "@/shared/api";

export interface ITestimonial {
  description: string;
  image: string;
}

export async function getTestimonials(): Promise<ITestimonial[]> {
  const response = await getFromApi<ITestimonial[]>("/landing-page/testimonials");
  if (!response.success || !response.data) {
    return [];
  }

  return response.data;
}