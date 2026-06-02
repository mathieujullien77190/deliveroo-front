import type { Meal } from "../../types";

export type MealsProps = Meal & {
  onChoose: (meal: Meal) => void;
};
