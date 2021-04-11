import React, { ReactElement } from "react";
import styled from "styled-components";
import Search from "./SearchIcon";

interface Props {}

const Root = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.primary};
  width: 480px;
  height: 56px;
`;

const SearchIcon = styled(Search)`
  margin: 0 24px 0 32px;
  width: 16px;
  height: 16px;
  fill: ${(props) => props.theme.textSecondary};
`;

const Input = styled.input`
  border: none;
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 100%;
  font-size: 14px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
`;

export default function SearchBar({}: Props): ReactElement {
  return (
    <Root>
      <SearchIcon />

      <Input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => console.log(e.target.value)}
      />
    </Root>
  );
}
