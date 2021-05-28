import { ApolloServer } from 'apollo-server-micro';
import schema from '../../apollo/schema';
import { MongoClient } from 'mongodb';

let db: unknown;

const server = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        if (!dbClient.isConnected()) await dbClient.connect();
        db = dbClient.db('booksplorer');
      } catch (e) {
        console.log('---> error while connecting via graphql context (db)', e);
      }
    }

    return { db };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
