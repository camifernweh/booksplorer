import { MockList } from 'apollo-server-micro';

const mocks = {
  Query: () => ({
    getAllCountries: () => new MockList([6, 9]),
  }),
  Country: () => ({
    id: () => '12334567',
    name: () => 'Brazil',
    alpha2: () => 'BR',
    alpha3: () => 'BRA',
    numeric: () => 76,
    lat: () => -10,
    long: () => -55,
    books: () => {
      return [
        {
          id: '754321',
          title: 'The Posthumous Memoirs of Bras Cubas',
          author: 'Machado de Assis',
          description:
            "'I am a deceased writer not in the sense of one who has written and is now deceased, but in the sense of one who had died and is now writing.' So begins the posthumous memoir of Braz Cubas, a wealthy nineteenth-century Brazilian. Though the grave has given Cubas the distance to examine his rather undistinguished life, it has not dampened his sense of humor. In the tradition of Laurence Stern’s Tristram Shamdy, Epitaph of a Small Winner is one of the wittiest self-portraits in literary history.\n",
          cover:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601068255l/11869301._SX98_.jpg',
          smallCover:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601068255l/11869301._SY75_.jpg',
          averageRating: 4.26,
          ratingsCount: 25,
          categories: ['Literary Criticism'],
          isbn10: '9780199880232',
          isbn13: '0199880239',
        },
        {
          id: '754321',
          title: 'The Posthumous Memoirs of Bras Cubas',
          author: 'Machado de Assis',
          description:
            "'I am a deceased writer not in the sense of one who has written and is now deceased, but in the sense of one who had died and is now writing.' So begins the posthumous memoir of Braz Cubas, a wealthy nineteenth-century Brazilian. Though the grave has given Cubas the distance to examine his rather undistinguished life, it has not dampened his sense of humor. In the tradition of Laurence Stern’s Tristram Shamdy, Epitaph of a Small Winner is one of the wittiest self-portraits in literary history.\n",
          cover:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601068255l/11869301._SX98_.jpg',
          smallCover:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601068255l/11869301._SY75_.jpg',
          averageRating: 4.26,
          ratingsCount: 25,
          categories: ['Literary Criticism'],
          isbn10: '9780199880232',
          isbn13: '0199880239',
        },
      ];
    },
  }),
};

export default mocks;
