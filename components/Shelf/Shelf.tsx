import { useState, useEffect } from 'react';
import BookList from '../BookList/BookList';

const getClientSideProps = () => {
  const countriesArr = [];
  const books = [];

  for (let i = 0; i < localStorage.length; i++) {
    let book = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (book.country && book.id) {
      books.push(book);
      if (!countriesArr.includes(book.country)) {
        countriesArr.push(book.country);
      }
    }
  }
  const countries = countriesArr.sort();
  return { countries, books };
};

export default function Shelf(): React.ReactElement {
  const [countries, setCountries] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const { countries, books } = getClientSideProps();
    setCountries(countries);
    setBooks(books);
  }, []);

  return (
    <>
      {countries.map((country) => {
        const filteredBooks = books.filter((book) => book.country === country);
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
