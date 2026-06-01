import Meal from "../Meal";
import * as S from "./UI";

export const Category = () => {
  return (
    <S.Container>
      <S.H3>Brunchs</S.H3>
      <S.Content>
        <Meal />
        <Meal />
        <Meal />
        <Meal />
      </S.Content>
    </S.Container>
  );
};
