import { Brand, DataBrands } from "../types/brands";

export interface SelectProps {
  id: string;
  label: string;
  data: any;
  disabled?: boolean;
}

export interface DataObject {
  codigo: string;
  nome: string;
}
