import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { CountryCode } from "../pages/[country]";
import { ICountry } from "../types/country";
import Button from "./Button";

const Root = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

const Flag = styled.figure`
  width: 45vw;
  max-width: 560px;
  max-height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const Information = styled.div`
  padding: 38px 0;
  width: 45vw;
  max-width: 600px;
`;

const Name = styled.h2`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 32px;
`;

const Text = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 300;

  b {
    font-weight: 600;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const MoreDetails = styled.div`
  display: flex;
  margin-bottom: 76px;

  > div {
    width: 50%;
  }
`;

const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;

  b {
    font-weight: 600;
  }
`;

const BorderCountry = styled(Button)`
  margin: 4px 5px;
  padding: 4px 28px;
  font-weight: 300;
  font-size: 14px;
`;

interface Props {
  country: ICountry;
  codes: CountryCode[];
}

export default function CountryDetails({
  country,
  codes,
}: Props): ReactElement {
  let codeMap = new Map<string, string>();

  if (codes) {
    codes.forEach((code) => codeMap.set(code.alpha3Code, code.name));
  }

  return (
    <Root>
      <Flag>
        <img src={country.flag} alt={`${country.name} flag`} />
      </Flag>

      <Information>
        <Name>{country.name}</Name>

        <MoreDetails>
          <div>
            <Text>
              <b>Native Name: </b>
              {country.nativeName}
            </Text>

            <Text>
              <b>Population: </b>
              {country.population.toLocaleString()}
            </Text>

            <Text>
              <b>Region: </b>
              {country.region}
            </Text>

            <Text>
              <b>Sub Region: </b>
              {country.subregion}
            </Text>

            <Text>
              <b>Capital: </b>
              {country.capital}
            </Text>
          </div>

          <div>
            <Text>
              <b>Top Level Domain: </b>
              {country.topLevelDomain}
            </Text>

            <Text>
              <b>Currencies: </b>
              {country.currencies.map((currency, i) => (
                <span key={`currency-${i}`}>{currency.code}</span>
              ))}
            </Text>

            <Text>
              <b>Languages: </b>
              {country.languages.map((language, i) => (
                <span key={`currency-${i}`}>{language.name}</span>
              ))}
            </Text>
          </div>
        </MoreDetails>

        <Borders>
          <b>Border Countries:</b>

          {codeMap &&
            country.borders.map((border, i) => (
              <Link href="/[country]" as={`/${border}`} key={`border-${i}`}>
                <BorderCountry>{codeMap.get(border)}</BorderCountry>
              </Link>
            ))}
        </Borders>
      </Information>
    </Root>
  );
}
