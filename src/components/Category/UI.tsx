import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  article {
    width: calc(50% - 40px);
  }
`;

export const H3 = styled.h3``;
