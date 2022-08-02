import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
        position: absolute;
        width: 100%;  
    }
    body {
        background-color: ${props => props.theme.colors.main};
        display: flex;
        justify-content: center;
        font-family: 'Cinzel', serif;;
    }
`;

export default GlobalStyles;