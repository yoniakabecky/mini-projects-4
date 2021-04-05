import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
