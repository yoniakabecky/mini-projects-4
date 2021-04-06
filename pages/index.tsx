import { GetStaticProps } from "next";
import styled from "styled-components";
import CountryCard from "../components/CountryCard";
import Layout from "../components/Layout";
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
  margin-bottom: 48px;
`;

const Countries = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 74px;
`;

export default function Home({ countries }: Props) {
  return (
    <Layout>
      <Container>
        <Options>
          <p>filter and search bar</p>
        </Options>

        <Countries>
          {countries.map((country, i) => (
            <CountryCard country={country} key={`country-${i}`} />
          ))}
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
