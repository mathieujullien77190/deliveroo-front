import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants";

export const Container = styled.div`
  position: sticky;
  top: 0;
  width: 350px;
  border-radius: 5px;
  background-color: white;
  padding: 15px;
  top: 30px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 22px 24px 0 rgba(46, 51, 51, 0.07);
`;

export const validateButton = styled.button`
  background-color: ${PRIMARY_COLOR};
  color: white;
  font-weight: 500;
  padding: 15px 0;
  border-radius: 5px;
  font-size: 1.2rem;
  width: 100%;
  border: none;
`;

export const EmptyCart = styled.p`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 300;
  width: 100%;
`;
