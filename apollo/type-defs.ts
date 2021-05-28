import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Country {
    _id: ID!
    name: String!
    alpha2: String
    alpha3: String
    numeric: Int
    lat: Float!
    long: Float!
    books: [Book!]!
  }

  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
    cover: String!
    smallCover: String!
    averageRating: Float
    ratingsCount: Int
    categories: [String]
    isbn10: String
    isbn13: String
  }

  type Query {
    countries: [Country!]!
    countryByName(name: String!): Country!
    countryById(id: ID!): Country!
  }
`;

export default typeDefs;
