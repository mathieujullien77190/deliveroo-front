import { SECONDARY_COLOR } from "../../constants";
import * as S from "./UI";
import { FaStar } from "react-icons/fa";

export const Meal = () => {
  return (
    <S.Container>
      <div>
        <h4>Brunch authentique 1 personne</h4>
        <p>Assiette de jambon cuit, jambon fumeì, terrine, comté bio &</p>
        <S.Advanced>
          <S.Price>25,00€</S.Price>
          <S.Tag>
            <FaStar color={SECONDARY_COLOR} /> Populaire
          </S.Tag>
        </S.Advanced>
      </div>
      <img
        src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"
        alt="illustration du brunch"
      />
    </S.Container>
  );
};
