import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import BookList from '../BookList/BookList';
import styles from './ShelfWantToRead.module.css';

const getShelfProps = () => {
  const countriesArr = [];
  const shelfBooks = [];

  for (let i = 0; i < localStorage.length; i++) {
    let book = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (book.id && !book.read) {
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
  const [countries, setCountries] = useState([]);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { shelfCountries, shelfBooks } = getShelfProps();

    setCountries(shelfCountries);
    setBooks(shelfBooks);
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
          <div className={styles.container}>
            <Typography align="center" style={{ fontSize: '1.1rem' }}>
              You haven't added any books to your shelf yet.
            </Typography>
            <Typography align="center" style={{ fontSize: '1.1rem' }}>
              <a href="/#explore">Go explore!</a>
            </Typography>
          </div>
        ))}
    </>
  );
}
