import { useState } from "react";
import { Wrapper } from "../../GlobalStyle";
import type { Meal, Product } from "../../types";

import Cart from "../Cart";
import Category from "../Category";
import type { MenuProps } from "./types";
import * as S from "./UI";
import { addProductToCart, getGlobalPrices } from "./helpers";

export const Menu = ({ categories }: MenuProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddToCart = (meal: Meal) => {
    setProducts(addProductToCart(meal, products));
  };

  //   const handleDeleteFromCart = (mealId: string) => {
  //     setProducts(deleteProductFromCart(mealId, products));
  //   };

  const prices = getGlobalPrices(products, categories);

  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.Main>
            {categories.map((category) =>
              category.meals.length ? (
                <Category
                  key={category.name}
                  {...category}
                  onChoose={handleAddToCart}
                />
              ) : (
                <></>
              ),
            )}
          </S.Main>
          <S.Side>
            <Cart products={products} {...prices} />
          </S.Side>
        </S.Content>
      </Wrapper>
    </S.Container>
  );
};
