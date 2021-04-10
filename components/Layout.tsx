import React, { ReactElement } from "react";
import styled from "styled-components";
import Nav from "./Nav";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Main = styled.main`
  margin-top: 80px;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  color: ${(props) => props.theme.color};
`;

export default function Layout({ children, className }: Props): ReactElement {
  return (
    <>
      <Nav />

      <Main className={className}>{children}</Main>
    </>
  );
}
