import styled from "styled-components";

export const Container = styled.section`
  padding: 30px 0;
  display: flex;
  gap: 30px;

  p {
    line-height: 1.6rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
  }

  > img {
    overflow: hidden;
    width: 380px;
    flex-shrink: 0;
  }
`;

export const H2 = styled.h2``;
