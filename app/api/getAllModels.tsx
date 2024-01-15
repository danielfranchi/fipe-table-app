import { DataModel } from "@/types/models";

export default async function getAllModels(
  brandCode: string
): Promise<DataModel> {
  const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("request failure");
  }

  return await response.json();
}
