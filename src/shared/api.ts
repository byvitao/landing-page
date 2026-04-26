const apiUrl = process.env.API_URL!;
export interface IApiResponse<T> {
  data?: T;
  success: boolean;
}

export async function getFromApi<T>(endpoint: string): Promise<IApiResponse<T>> {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`);

    if (!response.ok) {
      console.error(`[API] HTTP ${response.status} ${response.statusText} - ${endpoint}`);
      return { success: false };
    }

    const json = await response.json();
    return { data: json.data as T, success: true };

  } catch (err) {
    console.error(err);
    return { success: false }
  }
}