import Layout from '../../containers/Layout';
import client from '../../apollo/client';
import { gql } from '@apollo/client';
import { createPathStrings, getNameFromPath } from '../../lib/utils/strings';

export default function Country({ country }) {
  const books = country.books;

  return (
    <Layout title={country.name}>
      <p>{country.name}</p>
      {books.map((book) => {
        return <li key={book.title}>{book.title}</li>;
      })}
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
            title
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
