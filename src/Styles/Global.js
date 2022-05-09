import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    @import url('https://fonts.googleapis.com/css2?family=Oswald');

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
        background-color: ${props => props.theme.colors.background2};
        min-height: 100vh;
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        font-family:  ${props => props.theme.fonts.main};
    }
`;

export default GlobalStyles;
