import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ArrowIcon from "../components/ArrowIcon";
import Button from "../components/Button";
import CountryDetails from "../components/CountryDetails";
import DefaultLayout from "../components/Layout";
import { ICountry } from "../types/country";

const Layout = styled(DefaultLayout)`
  && {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  margin: 0 auto;
  max-width: 1280px;
  overflow-y: scroll;

  @media (max-width: 1280px) {
    padding: 80px 16px;
  }
`;

const BackBtn = styled(Button)`
  justify-content: center;
  width: 136px;
  height: 40px;

  span {
    margin: 0 6px 0 10px;
    font-size: 16px;
    font-weight: 700;
  }
`;

const Arrow = styled(ArrowIcon)`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.color};
`;

export type CountryCode = {
  name?: string;
  alpha3Code: string;
};

interface Props {
  country: ICountry;
  codes: Array<CountryCode>;
}

export default function Country({ country, codes }: Props): ReactElement {
  if (!country) return null;

  return (
    <>
      <Head>
        <title>{country.name} | REST Countries API</title>
      </Head>

      <Layout>
        <Container>
          <Link href="/">
            <BackBtn>
              <Arrow />
              <span>Back</span>
            </BackBtn>
          </Link>

          <CountryDetails country={country} codes={codes} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/all?fields=alpha3Code`
  );
  const codes: CountryCode[] = await res.json();

  const paths = codes.map((code) => ({
    params: { country: code.alpha3Code },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fetchCountry = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.country}`
  );
  const country: ICountry[] = await fetchCountry.json();

  const fetchCodes = await fetch(
    `https://restcountries.eu/rest/v2/all?fields=name;alpha3Code`
  );
  const codes: CountryCode[] = await fetchCodes.json();

  return {
    props: { country, codes },
  };
};
