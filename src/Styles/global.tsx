import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ThemeClass } from './theme'

export default createGlobalStyle<{theme: ThemeClass}>`
    ${normalize};
    @import url('https://fonts.googleapis.com/css2?family=Montserrat');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
        position: absolute;
        width: 100vw;
    }

    body {
        overflow-x: hidden;
        width: 100vw;
        background-color: ${props => props.theme.colors.background2};
        min-height: 100vh;
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        font-family:  ${props => props.theme.fonts.main};
        font-weight: regular;
    }

    .Text-Gradient {
        background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }

    .Section_Heading {
        padding-bottom: 50px;
        padding-left: 125px;
        padding-top: 50px;
        display: inline-block;
        font-size: 40px;
        line-height: 128%;
        letter-spacing: 0.22em;
        pointer-events: none;

        &::before {
            content: "";
            margin-bottom: 5px;
            float: left;
            background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
            width: 50%;
            height: 4px;
            border-radius: 5px;
            z-index: 1;
        }

        @media ${props => props.theme.breakpoints.xxl}{
            padding-bottom: 40px;
            padding-left: 100px;
            padding-top: 40px;
            font-size: 35px;
        }

        @media ${props => props.theme.breakpoints.md}{
            padding-bottom: 25px;
            padding-left: 50px;
            padding-top: 25px;
            font-size: 28px;
        }

        @media ${props => props.theme.breakpoints.md}{
            padding-left: 25px;
        }

        @media ${props => props.theme.breakpoints.sm}{
            font-size: 25px;
        }

        @media ${props => props.theme.breakpoints.xs}{
            font-size: 22px;
        }
    }
    .GradientUnderline{
        margin-top: 40px;
        display: block;
        margin-left: auto;
        margin-right: auto;

        @media ${props => props.theme.breakpoints.sm}{
            width: 80%;
        }
    } 
`;
