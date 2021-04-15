import Head from "next/head";
import Router from "next/router";
import { AppProps } from "next/dist/next-server/lib/router/router";
import styled, { ThemeProvider } from "styled-components";
import React from "react";
import { darkTheme, GlobalStyle, lightTheme } from "../theme";
import Nav from "../components/Nav";

const Loader = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  z-index: -1;

  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.5rem solid #eee;
    border-top: 0.5rem solid tomato;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    animation: spin 1.1s infinite linear;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
  }, []);

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

        {!loading ? (
          <Component {...pageProps} />
        ) : (
          <Loader>
            <span />
          </Loader>
        )}
      </ThemeProvider>
    </>
  );
}
