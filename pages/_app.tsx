import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../theme";
import React from "react";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <Head>
        <title>REST Countries API | Frontend Mentor</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Nav theme={darkMode} setTheme={setDarkMode} />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
