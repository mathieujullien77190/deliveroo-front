import * as S from "./UI";

import { Wrapper } from "../../GlobalStyle";

export const Intro = () => {
  return (
    <Wrapper>
      <S.Container>
        <div>
          <S.H2>Le Pain Quotidien - Montorgueil</S.H2>
          <p>
            Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien
            propose des ingrédients simples et sains, du bon pain, des fruits et
            des légumes frais et de saison issus de l’agriculture biologique.
          </p>
        </div>
        <img
          src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
          alt="illustration de la bouffe"
        />
      </S.Container>
    </Wrapper>
  );
};
