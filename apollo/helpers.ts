import { Country } from '../lib/types';
import { ObjectId } from 'mongodb';

export function handleError(e: Error): Error {
  console.error(e);
  return e;
}

export async function getAllCountries(context: any): Promise<Country[]> {
  try {
    const data = await context.db.collection('countries').find().toArray();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    handleError(e);
  }
}

export async function getCountryByName(
  name: string,
  context: any,
): Promise<Country> {
  try {
    const country = await context.db
      .collection('countries')
      .findOne({ name: name });
    return country ? country : {};
  } catch (e) {
    handleError(e);
  }
}

export async function getCountryById(
  id: string,
  context: any,
): Promise<Country> {
  try {
    const objId = new ObjectId(id);
    const country = await context.db
      .collection('countries')
      .findOne({ _id: objId });
    return country ? country : {};
  } catch (e) {
    handleError(e);
  }
}
