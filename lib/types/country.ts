import { Book } from './index';

export interface Country {
  id: string;
  name: string;
  alpha2: string;
  alpha3: string;
  numeric: number;
  lat: number;
  long: number;
  books: Book[];
}
