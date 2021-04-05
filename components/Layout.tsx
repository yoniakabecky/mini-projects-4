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
      </Head>

      <Nav />

      <Main>{children}</Main>
    </>
  );
}