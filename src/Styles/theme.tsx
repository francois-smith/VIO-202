import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";

export  interface ThemeClass {
    fonts:{
        main: string,
    };
    colors:{
        primary: string;
        accent: string;
        background1: string;
        background2: string;
        text: string;
    }
    breakpoints:{
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    }
}

const DefaultTheme: ThemeClass = {
    fonts: {
        main: "Montserrat, sans-serif"
    },
    colors: {
        primary: "#584895",
        accent: "#00adee",
        background1: "#0D0D0D",
        background2: "#171717",
        text: "#f0f0f0"
    },
    breakpoints: {
        xs: 'screen and (max-width: 320px)',
        sm: 'screen and (max-width: 568px)',
        md: 'screen and (max-width: 800px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1300px)',
        xxl: 'screen and (max-width: 1440px)',
    }
}

const Theme = ({ children }: any) => (
    <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;
