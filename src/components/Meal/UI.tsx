import styled from "styled-components";
import { SECONDARY_COLOR } from "../../constants";

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px;
  background-color: white;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
  }
`;

export const Advanced = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;

export const Price = styled.span`
  color: #808484;
  font-size: 1.1rem;
`;

export const Tag = styled.span`
  color: ${SECONDARY_COLOR};
  font-size: 0.8rem;
  font-weight: 500;
`;
