import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;

  @media (max-width: 1280px) {
    padding: 1.5rem 1rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Container>main contents</Container>
    </Layout>
  );
}
