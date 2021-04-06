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
  secondary: "hsl(209, 23%, 22%)",
  background: "hsl(207, 26%, 17%)",
  color: "hsl(0, 0%, 100%)",
  boxShadow: "0px 2px 10px rgba(35, 39, 42, 0.5)",
};

export const lightTheme: DefaultTheme = {
  primary: "hsl(0, 0%, 100%)",
  secondary: "hsl(0, 0%, 52%)",
  background: "hsl(0, 0%, 98%)",
  color: "hsl(200, 15%, 8%)",
  boxShadow: "0px 2px 10px #E5E5E5",
};
