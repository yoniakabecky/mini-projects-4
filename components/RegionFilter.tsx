import React, { ReactElement } from "react";
import styled from "styled-components";
import DownIcon from "./DownIcon";

interface Props {
  setRegion: (region: string) => void;
  region: string;
}

const Root = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 300;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border-radius: 4px;
  padding: 18px 18px 18px 24px;
  background-color: ${(props) => props.theme.primary};
  width: 200px;
  height: 56px;
  cursor: pointer;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  :active {
    background-color: ${(props) => props.theme.hoverBg};
  }

  span {
    text-transform: capitalize;
  }
`;

const ChevronDown = styled(DownIcon)`
  width: 12px;
  height: 12px;
  stroke: ${(props) => props.theme.color};
`;

const DropDown = styled.ul`
  position: absolute;
  top: 60px;
  transition: all 0.5s ease;
  background-color: ${(props) => props.theme.primary};
  border-radius: 4px;
  padding: 12px 0;
  width: 100%;
  list-style: none;
`;

const DropDownContent = styled.li`
  margin-bottom: 2px;
  transition: background-color 0.5s ease;
  cursor: pointer;
  padding: 4px 24px;
  width: 100%;
  text-transform: capitalize;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    background-color: ${(props) => props.theme.hoverBg};
  }
`;

const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];

export default function RegionFilter({
  region,
  setRegion,
}: Props): ReactElement {
  const [open, setOpen] = React.useState(false);

  const handleClick = (value: string) => {
    value === "all" ? setRegion("") : setRegion(value);
    setOpen(false);
  };

  return (
    <Root>
      <Button onClick={() => setOpen(!open)}>
        <span>{region === "" ? "Filter by Region" : region}</span>

        <ChevronDown />
      </Button>

      {open && (
        <DropDown>
          {regions.map((region) => (
            <DropDownContent key={region} onClick={() => handleClick(region)}>
              {region}
            </DropDownContent>
          ))}
        </DropDown>
      )}
    </Root>
  );
}
