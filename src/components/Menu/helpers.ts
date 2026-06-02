import { SHIPPING_COST } from "../../constants";
import type { Category, Meal, Product } from "../../types";

export const hasProductInCart = (id: string, products: Product[]): boolean =>
  products.filter((product) => product.id === id).length > 0;

export const getCountOfProductInCart = (
  id: string,
  products: Product[],
): number => {
  const product = products.filter((product) => product.id === id);
  return product.length > 0 ? product[0].count : 0;
};

export const addProductToCart = (
  meal: Meal,
  products: Product[],
): Product[] => {
  if (hasProductInCart(meal.id, products)) {
    return products.map((product) =>
      product.id === meal.id
        ? { ...product, count: product.count + 1 }
        : product,
    );
  }
  return [...products, { id: meal.id, count: 1, title: meal.title }];
};

export const deleteProductFromCart = (
  id: string,
  products: Product[],
): Product[] => {
  if (
    hasProductInCart(id, products) &&
    getCountOfProductInCart(id, products) >= 2
  ) {
    return products.map((product) =>
      product.id === id ? { ...product, count: product.count - 1 } : product,
    );
  }
  return products.filter((product) => product.id !== id);
};

export const getPriceOfProduct = (
  id: string,
  categories: Category[],
): number => {
  const meal = categories
    .reduce<Meal[]>((acc, curr) => [...acc, ...(curr.meals ?? [])], [])
    .find((item) => item.id === id);

  return meal ? parseFloat(meal.price) : 0;
};

export const getGlobalPrices = (
  products: Product[],
  categories: Category[],
): { subTotal: number; total: number } => {
  const subTotal = products
    .map((product) => getPriceOfProduct(product.id, categories) * product.count)
    .reduce((acc, curr) => acc + curr, 0);

  const total = subTotal + SHIPPING_COST;

  return {
    subTotal,
    total,
  };
};
