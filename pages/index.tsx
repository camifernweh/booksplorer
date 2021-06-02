import Layout from '../containers/Layout';
import { Country } from '../lib/types';
import client from '../apollo/client';
import { gql } from '@apollo/client';
import Map from '../components/Map/Map';

export interface CountriesProps {
  countries: Country[];
}

export default function Home({
  countries,
}: CountriesProps): React.ReactElement {
  return (
    <Layout title="Home">
      <Map countries={countries} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetAllCountries {
        countries {
          id: _id
          name
          lat
          long
          alpha2
          books {
            cover
          }
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
}
