export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  smallCover: string;
  averageRating: number;
  ratingsCount: number;
  categories: string[];
  isbn10: string;
  isbn13: string;
}
