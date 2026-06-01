import Styled, { createGlobalStyle } from "styled-components";
import { TEXT_COLOR } from "./constants";

export const GlobalStyle = createGlobalStyle`


body {
    font-family: "Fredoka", sans-serif;
   
}

h1 {
    font-size: 4rem;
    font-weight: 500;
}

h2 {
    font-size: 2rem;
    font-weight: 500;
}

h3 {
    font-size: 1.5em;
    font-weight: 500;
}

h4 {
    font-size: 1.17em;
    font-weight: 300;
}

p {
    color: ${TEXT_COLOR};
    font-size: 1.25rem;
    font-weight: 200;
}

img {
    border-radius: 5px;
}`;

export const Wrapper = Styled.div`
    margin:0 auto;
    display: flex;
    width: 1200px;
`;
