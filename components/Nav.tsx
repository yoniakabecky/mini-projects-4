import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

const Root = styled.nav`
  position: fixed;
  top: 0;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 80px;
  color: ${(props) => props.theme.color};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;

  @media (max-width: 1280px) {
    padding: 0 1rem;
  }
`;

export default function Nav({}: Props): ReactElement {
  return (
    <Root>
      <Container>
        <div>Where in the world?</div>

        <div>Dark Mode</div>
      </Container>
    </Root>
  );
}
