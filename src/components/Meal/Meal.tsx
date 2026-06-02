import { SECONDARY_COLOR } from "../../constants";
import type { MealsProps } from "./types";
import * as S from "./UI";
import { FaStar } from "react-icons/fa";
import bag from "../../assets/bag.svg";

export const Meal = ({ onChoose, ...meal }: MealsProps) => {
  const { title, description, price, picture, popular } = meal;
  return (
    <S.Container
      onClick={() => {
        onChoose(meal);
      }}
    >
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <S.Advanced>
          <S.Price>{price}€</S.Price>
          {popular && (
            <S.Tag>
              <FaStar color={SECONDARY_COLOR} /> Populaire
            </S.Tag>
          )}
        </S.Advanced>
      </div>
      {picture ? (
        <img src={picture} alt={title} />
      ) : (
        <img src={bag} alt="quelque chose à manger" />
      )}
    </S.Container>
  );
};
