import { Wrapper } from "../../GlobalStyle";
import Cart from "../Cart";
import Category from "../Category";
import * as S from "./UI";

export const Menu = () => {
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.Main>
            <Category />
          </S.Main>
          <S.Side>
            <Cart />
          </S.Side>
        </S.Content>
      </Wrapper>
    </S.Container>
  );
};
