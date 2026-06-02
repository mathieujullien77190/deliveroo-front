import type { Category, Meal } from "../../types";

export type CategoryProps = Category & {
  onChoose: (meal: Meal) => void;
};
