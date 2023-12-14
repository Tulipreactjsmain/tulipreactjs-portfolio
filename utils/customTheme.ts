import { extendTheme, ThemeConfig } from "@chakra-ui/react";

interface CustomThemeFonts {
  heading: string;
  body: string;
}

interface CustomThemeConfig extends ThemeConfig {
  fonts?: CustomThemeFonts;
}

const theme: CustomThemeConfig = extendTheme({
  styles: {
    global: {
      "Html, body": {
        fontSize: "16px",
        background: "#101419",
        color:"#E7DFC6"
      },
    },
  },
  fonts: {
    heading: `'harmattan', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "7xl": "6.875rem",
  },
  colors: {
    brand: {
      100: "#E7DFC6",
      200: "#E9F1F7",
    },
  },
});

export default theme;
