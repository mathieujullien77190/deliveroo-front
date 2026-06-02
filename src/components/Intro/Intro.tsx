import * as S from "./UI";

import { Wrapper } from "../../GlobalStyle";
import type { IntroProps } from "./types";

export const Intro = ({ name, description, picture, path }: IntroProps) => {
  return (
    <Wrapper>
      <S.Container>
        <div>
          <S.H2>{name}</S.H2>
          <p>{description}</p>
        </div>
        <img src={picture} alt={path} />
      </S.Container>
    </Wrapper>
  );
};
