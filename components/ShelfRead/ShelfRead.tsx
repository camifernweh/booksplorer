import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import BookList from '../BookList/BookList';

const getReadProps = () => {
  const countriesArr = [];
  const readBooks = [];

  for (let i = 0; i < localStorage.length; i++) {
    let book = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (book.id && book.read) {
      readBooks.push(book);
      if (!countriesArr.includes(book.country)) {
        countriesArr.push(book.country);
      }
    }
  }
  const readCountries = countriesArr.sort();
  return { readCountries, readBooks };
};

export default function ShelfRead() {
  const [countries, setCountries] = useState([]);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { readCountries, readBooks } = getReadProps();
    setCountries(readCountries);
    setBooks(readBooks);
    setIsLoading(false);
  }, []);

  const filterBooks = (id: string): void => {
    const filtered = books.filter((book) => book.id !== id);
    setBooks(filtered);
  };

  return (
    <>
      {isLoading && <Typography>Loading...</Typography>}
      {!isLoading &&
        (countries.length ? (
          countries.map((country) => {
            const filteredBooks = books.filter(
              (book) => book.country === country,
            );
            if (!filteredBooks.length) return <></>;
            return (
              <BookList
                key={country}
                country={country}
                books={filteredBooks}
                shelf
                filterBooks={filterBooks}
              ></BookList>
            );
          })
        ) : (
          <Typography align="center">
            You haven't read any books from our list yet.
          </Typography>
        ))}
    </>
  );
}
