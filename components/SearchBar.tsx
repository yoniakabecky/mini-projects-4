import React, { ReactElement } from "react";
import styled from "styled-components";
import Search from "./SearchIcon";

const Root = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.primary};
  width: 480px;
  height: 56px;
  overflow: hidden;

  @media (max-width: 600px) {
    margin-bottom: 40px;
    width: 100%;
    height: 48px;
  }
`;

const SearchIcon = styled(Search)`
  margin: 0 24px 0 32px;
  width: 16px;
  height: 16px;
  fill: ${(props) => props.theme.textSecondary};

  @media (max-width: 600px) {
    width: 14px;
    height: 14px;
  }
`;

const Input = styled.input`
  border: none;
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: ${(props) => props.theme.color};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export default function SearchBar({
  keyword,
  setKeyword,
}: Props): ReactElement {
  return (
    <Root>
      <SearchIcon />

      <Input
        type="text"
        aria-label="search"
        placeholder="Search for a country..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </Root>
  );
}
