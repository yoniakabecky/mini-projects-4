import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export const darkTheme: DefaultTheme = {
  primary: "hsl(209, 23%, 22%)",
  background: "hsl(207, 26%, 17%)",
  backgroundSecondary: "hsl(207, 25%, 17%)",
  color: "hsl(0, 0%, 100%)",
  textSecondary: "hsl(0, 0%, 100%)",
  boxShadow: "0px 2px 10px rgba(35, 39, 42, 0.5)",
  hoverBg: "rgba(255, 255, 255, 0.2)",
};

export const lightTheme: DefaultTheme = {
  primary: "hsl(0, 0%, 100%)",
  background: "hsl(0, 0%, 98%)",
  backgroundSecondary: "hsl(0, 0%, 100%)",
  color: "hsl(200, 15%, 8%)",
  textSecondary: "hsl(0, 0%, 52%)",
  boxShadow: "0px 2px 10px #E5E5E5",
  hoverBg: "rgba(204, 204, 204, 0.2)",
};
