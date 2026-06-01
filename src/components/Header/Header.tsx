import * as S from "./UI";
import logo from "../../assets/logo-teal.svg";
import { Wrapper } from "../../GlobalStyle";

export const Header = () => {
  return (
    <S.Header>
      <Wrapper>
        <S.H1>
          <S.Logo src={logo} alt="Deliveroo" />
        </S.H1>
      </Wrapper>
    </S.Header>
  );
};
