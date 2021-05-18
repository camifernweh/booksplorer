import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../apollo/schema';
import mocks from '../../apollo/mocks';

const server = new ApolloServer({ typeDefs, mocks });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
