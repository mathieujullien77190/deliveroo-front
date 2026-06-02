import Meal from "../Meal";
import type { CategoryProps } from "./types";
import * as S from "./UI";

export const Category = ({ name, meals, onChoose }: CategoryProps) => {
  return (
    <S.Container>
      <S.H3>{name}</S.H3>
      <S.Content>
        {meals.map((meal) => (
          <Meal key={meal.id} {...meal} onChoose={onChoose} />
        ))}
      </S.Content>
    </S.Container>
  );
};
