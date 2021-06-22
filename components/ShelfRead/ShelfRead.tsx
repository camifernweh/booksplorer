import { useState, useEffect } from 'react';
import BookList from '../BookList/BookList';

const getReadProps = () => {
  const countriesArr = [];
  const readBooks = [];

  for (let i = 0; i < localStorage.length; i++) {
    let book = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (book.read) {
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
  const [readCountries, setReadCountries] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const { readCountries, readBooks } = getReadProps();
    setReadCountries(readCountries);
    setReadBooks(readBooks);
  }, [readBooks]);

  return (
    <>
      {readCountries.map((country) => {
        const filteredBooks = readBooks.filter(
          (book) => book.country === country,
        );
        return (
          <BookList
            key={country}
            country={country}
            books={filteredBooks}
          ></BookList>
        );
      })}
    </>
  );
}
