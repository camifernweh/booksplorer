import { Country, Book } from '../lib/types';
import * as helpers from './helpers';

const resolvers = {
  Query: {
    async getAllCountries(
      _: unknown,
      __: unknown,
      context: any,
    ): Promise<Country[]> {
      return await helpers.getAllCountries(context);
    },
    async getCountryByName(
      _: unknown,
      { name }: { name: string },
      context: any,
    ): Promise<Country> {
      return await helpers.getCountryByName(name, context);
    },
    async getCountryById(
      _: unknown,
      { id }: { id: string },
      context: any,
    ): Promise<Country> {
      return await helpers.getCountryById(id, context);
    },
  },
};

export default resolvers;
