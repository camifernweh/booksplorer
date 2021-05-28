import { Country } from '../lib/types';
import * as helpers from './helpers';

const resolvers = {
  Query: {
    async countries(_: unknown, __: unknown, context: any): Promise<Country[]> {
      return await helpers.getAllCountries(context);
    },
    async countryByName(
      _: unknown,
      { name }: { name: string },
      context: any,
    ): Promise<Country> {
      return await helpers.getCountryByName(name, context);
    },
    async countryById(
      _: unknown,
      { id }: { id: string },
      context: any,
    ): Promise<Country> {
      return await helpers.getCountryById(id, context);
    },
  },
};

export default resolvers;
