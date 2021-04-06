import Head from "next/head";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Nav from "./Nav";

interface Props {
  children: React.ReactNode;
}

const Main = styled.main`
  margin-top: 80px;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  color: ${(props) => props.theme.color};
`;

export default function Layout({ children }: Props): ReactElement {
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

      <Nav />

      <Main>{children}</Main>
    </>
  );
}
