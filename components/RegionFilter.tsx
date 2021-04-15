import React, { ReactElement } from "react";
import styled from "styled-components";
import DefaultButton from "./Button";
import DownIcon from "./DownIcon";

interface Props {
  setRegion: (region: string) => void;
  region: string;
}

const Root = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 300;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Button = styled(DefaultButton)`
  justify-content: space-between;
  padding: 18px 18px 18px 24px;
  width: 200px;
  height: 56px;

  span {
    text-transform: capitalize;
  }

  @media (max-width: 600px) {
    height: 48px;
  }
`;

const ChevronDown = styled(DownIcon)`
  width: 12px;
  height: 12px;
  stroke: ${(props) => props.theme.color};

  @media (max-width: 600px) {
    width: 10px;
    height: 10px;
  }
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

  @media (max-width: 600px) {
    width: 200px;
  }
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
  const dropdownRef = React.useRef<HTMLUListElement | null>(null);

  const handleClick = (value: string) => {
    value === "all" ? setRegion("") : setRegion(value);
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current?.contains(event.target as Node)) {
        return null;
      }

      setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <Root>
      <Button onClick={() => setOpen(!open)}>
        <span>{region === "" ? "Filter by Region" : region}</span>

        <ChevronDown />
      </Button>

      {open && (
        <DropDown ref={dropdownRef}>
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
