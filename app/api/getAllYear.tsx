import { DataYear } from "@/types/year";

export default async function getAllYear(
  brandCode: string,
  modelCode: string
): Promise<DataYear> {
  const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("request failure");
  }

  return await response.json();
}