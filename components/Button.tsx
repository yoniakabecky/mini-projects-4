import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Root = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.boxShadow};
  cursor: pointer;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  :active {
    background-color: ${(props) => props.theme.hoverBg};
  }
`;

export default function Button({
  children,
  className,
  onClick,
}: Props): ReactElement {
  return (
    <Root className={className} onClick={onClick}>
      {children}
    </Root>
  );
}
