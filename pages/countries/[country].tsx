import Layout from '../../containers/Layout';
import client from '../../apollo/client';
import { gql } from '@apollo/client';
import { createPathStrings, getNameFromPath } from '../../lib/utils/strings';
import { Country as CountryInterface } from '../../lib/types';
import { Typography } from '@material-ui/core';
import BookList from '../../components/BookList/BookList';

interface CountryProps {
  country: CountryInterface;
}

export default function Country({ country }: CountryProps): React.ReactElement {
  return (
    <Layout title={country.name}>
      <Typography variant="h4">{country.name}</Typography>
      <BookList books={country.books} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetAllCountriesNames {
        countries {
          name
        }
      }
    `,
  });
  const paths = createPathStrings(data.countries);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const countryName = getNameFromPath(params.country);

  const { data } = await client.query({
    query: gql`
      query GetCountryByName($name: String!) {
        countryByName(name: $name) {
          name
          books {
            id: _id
            title
            author
            description
            cover
            categories
          }
        }
      }
    `,
    variables: { name: countryName },
  });

  return {
    props: {
      country: data.countryByName,
    },
  };
}
