import { useState, useEffect } from 'react';
import BookList from '../BookList/BookList';
import styles from './Shelf.module.css';

export default function Shelf(): React.ReactElement {
  const getClientSideProps = () => {
    const arr = [];

    for (let i = 0; i < localStorage.length; i++) {
      arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return arr;
  };

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBooks(getClientSideProps());
    setIsLoading(false);
  }, []);

  console.log(books);

  return <BookList country="not yet" books={books}></BookList>;
}
