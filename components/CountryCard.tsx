import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { ICountry } from "../types/country";

interface Props {
  country: ICountry;
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  width: 264px;
  height: 336px;
  overflow: hidden;
`;

const Flag = styled.figure`
  width: 100%;
  height: 160px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Details = styled.div`
  padding: 24px;
  font-size: 14px;
`;

const Name = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 800;
`;

const Detail = styled.p`
  margin-bottom: 5px;

  b {
    font-weight: 600;
  }
`;

export default function CountryCard({ country }: Props): ReactElement {
  return (
    <Link href="/[country]" as={`/${country.alpha3Code}`}>
      <Card>
        <Flag>
          <img src={country.flag} alt={`${country.name} flag`} />
        </Flag>

        <Details>
          <Name>{country.name}</Name>

          <Detail>
            <b>Population: </b>
            {country.population.toLocaleString()}
          </Detail>

          <Detail>
            <b>Region: </b>
            {country.region}
          </Detail>

          <Detail>
            <b>Capital: </b>
            {country.capital}
          </Detail>
        </Details>
      </Card>
    </Link>
  );
}
