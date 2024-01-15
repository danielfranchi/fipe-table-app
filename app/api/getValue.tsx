import { Value } from "@/types/value";

export default async function getValue(
  brandCode: string,
  modelCode: string,
  yearsCode: string
): Promise<Value> {
  const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearsCode}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("request failure");
  }

  return await response.json();
}
