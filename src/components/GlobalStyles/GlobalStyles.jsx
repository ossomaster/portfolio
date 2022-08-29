import { createGlobalStyle } from "styled-components";
import theme from "../../constants/theme.constants";
import resetCSS from "./resetCSS.mixin";

const GlobalStyles = createGlobalStyle`
    ${resetCSS}

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${theme.fontFamily};
        font-size: ${theme.fontSize};
        line-height: 1.3;
    }

`;

export default GlobalStyles;
