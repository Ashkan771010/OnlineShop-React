import { createGlobalStyle } from "styled-components";

import BYekan from "../font/iranYekan/BYekan.ttf";
import BYekanBold from "../font/iranYekan/BYekanBold.ttf";
import IRANSans from "../font/iranSans/IRANSans.ttf";
import IRANSansBold from "../font/iranSans/IRANSansBold.ttf";

export const lightTheme = {
  bg: {
    color1: "#F5F5F5",
    properyCard: "#41e63c",
    propertyBack: "#191919",
    gg: "#F5F5F5",
  },

  text: {
    color1: "#191919",
    spanColor: "#F5F5F5",
  },

  border: {
    categoryCard: "#41e63c",
  },
};

export const darkTheme = {
  bg: {
    color1: "#222831",
    properyCard: "#6ecbe6",
    propertyBack: "#F5F5F5",
    gg: "#3b3b3b",
  },

  text: {
    color1: "#F5F5F5",
    spanColor: "#191919",
  },

  border: {
    categoryCard: "#6ecbe6",
  },
};

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        scroll-behavior: smooth;
        direction: rtl;
        background-color: ${(props) => props.theme.bg.color1};
        transition: background 0.5s ease;
        overflow-y: ${(props) => props.shouldScroll ? "hidden" : "scroll"};
    }

    @font-face {
        font-family: "IranYekan";
        src: url(${BYekan});
        font-weight: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "IranYekanB";
        src: url(${BYekanBold});
        font-weight: bold;
        font-display: auto;
    }

    @font-face {
        font-family: "IRANSans";
        src: url(${IRANSans});
        font-weight: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "IRANSansB";
        src: url(${IRANSansBold});
        font-weight: bold;
        font-display: auto;
    };
`;

export default GlobalStyles;
