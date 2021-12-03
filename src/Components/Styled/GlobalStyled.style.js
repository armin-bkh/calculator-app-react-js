import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

body{
    padding: 1rem;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #38a2d7, #561139);
}

`;

export default GlobalStyled;
