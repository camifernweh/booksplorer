import { Country, Book } from '../lib/types';

const resolvers = {
  Query: {
    async getAllCountries(_, __, _context) {
      return await _context.db.collection('countries').find().toArray();
    },
  },
};

export default resolvers;
