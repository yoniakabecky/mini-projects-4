import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import CountryCard from "../components/CountryCard";
import Layout from "../components/Layout";
import RegionFilter from "../components/RegionFilter";
import SearchBar from "../components/SearchBar";
import { ICountry } from "../types/country";
import { getInitialDisplayData } from "../utils/countries";

interface Props {
  countries: Array<ICountry>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  padding-top: 48px;
  height: 100%;

  @media (max-width: 1280px) {
    padding: 24px 16px;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Countries = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 74px;
`;

export default function Home({ countries }: Props) {
  const [region, setRegion] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState([
    ...countries,
  ]);
  const [keyword, setKeyword] = React.useState("");

  const memoInitData = React.useMemo(() => {
    return async () => {
      const data = await getInitialDisplayData();

      setFilteredCountries(data);
    };
  }, [region]);

  const memoRegionData = React.useMemo(() => {
    return async () => {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      const data = await res.json();

      setFilteredCountries(data);
    };
  }, [region]);

  React.useEffect(() => {
    region === "" ? memoInitData() : memoRegionData();
  }, [region]);

  return (
    <Layout>
      <Container>
        <Options>
          <SearchBar keyword={keyword} setKeyword={setKeyword} />

          <RegionFilter region={region} setRegion={setRegion} />
        </Options>

        <Countries>
          {filteredCountries?.map((country, i) => {
            if (
              keyword === "" ||
              country.name.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return <CountryCard country={country} key={`country-${i}`} />;
            }
          })}
        </Countries>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const countries = await getInitialDisplayData();

  return {
    props: { countries },
  };
};
