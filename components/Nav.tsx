import React, { ReactElement } from "react";
import styled from "styled-components";
import Moon from "./MoonIcon";

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

const Title = styled.h1`
  font-weight: 800;
  font-size: 24px;
`;

const ThemeBtn = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
`;

const MoonIcon = styled(Moon)`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  stroke: ${(props) => props.theme.color};
`;

export default function Nav({}: Props): ReactElement {
  return (
    <Root>
      <Container>
        <Title>Where in the world?</Title>

        <ThemeBtn onClick={() => console.log("toggle theme")}>
          <MoonIcon filled={false} />
          Dark Mode
        </ThemeBtn>
      </Container>
    </Root>
  );
}
