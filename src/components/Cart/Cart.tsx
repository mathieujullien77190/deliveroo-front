import type { CartProps } from "./types";
import * as S from "./UI";

export const Cart = ({ products, total, subTotal }: CartProps) => {
  return (
    <S.Container>
      <S.validateButton>Valider mon panier</S.validateButton>
      <S.EmptyCart>
        <pre>{JSON.stringify(products, null, 2)}</pre>
        <pre>
          {total} / {subTotal}
        </pre>
      </S.EmptyCart>
    </S.Container>
  );
};
