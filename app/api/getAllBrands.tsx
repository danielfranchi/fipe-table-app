import { DataBrands } from "@/types/brands";

export default async function getAllBrands(): Promise<DataBrands[]> {
  const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("request failure");
  }

  return await response.json();
}
