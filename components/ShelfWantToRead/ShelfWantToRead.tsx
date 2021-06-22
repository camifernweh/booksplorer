import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import BookList from '../BookList/BookList';

const getShelfProps = () => {
  const countriesArr = [];
  const shelfBooks = [];

  for (let i = 0; i < localStorage.length; i++) {
    let book = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (!book.read) {
      shelfBooks.push(book);
      if (!countriesArr.includes(book.country)) {
        countriesArr.push(book.country);
      }
    }
  }
  const shelfCountries = countriesArr.sort();
  return { shelfCountries, shelfBooks };
};

export default function ShelfWantToRead(): React.ReactElement {
  const [shelfCountries, setShelfCountries] = useState([]);
  const [shelfBooks, setShelfBooks] = useState([]);

  useEffect(() => {
    const { shelfCountries, shelfBooks } = getShelfProps();
    setShelfCountries(shelfCountries);
    setShelfBooks(shelfBooks);
  }, [shelfBooks]);

  return (
    <>
      {shelfCountries.length ? (
        shelfCountries.map((country) => {
          const filteredBooks = shelfBooks.filter(
            (book) => book.country === country,
          );
          return (
            <BookList
              key={country}
              country={country}
              books={filteredBooks}
            ></BookList>
          );
        })
      ) : (
        <Typography>
          You haven't added any books to your shelf yet.{' '}
          <a href="/#explore">Go explore!</a>
        </Typography>
      )}
    </>
  );
}
