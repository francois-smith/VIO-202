import { ThemeProvider } from "styled-components";

import theme from "../Themes/Default";
import GlobalStyles from "./Global";

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;
