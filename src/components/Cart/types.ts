import type { Product } from "../../types";

export type CartProps = {
  products: Product[];
  total: number;
  subTotal: number;
};
