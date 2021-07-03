import { useState } from 'react';
import Link from 'next/link';
import styles from './BookList.module.css';
import { Book } from '../../lib/types';
import BookItem from '../BookItem/BookItem';
import { Typography } from '@material-ui/core';
import { getPathFromName } from '../../lib/utils/strings';

interface BookListProps {
  country: string;
  books: Book[];
  shelf?: boolean;
}

export default function BookList({
  country,
  books,
  shelf,
}: BookListProps): React.ReactElement {
  const [bookList, setBookList] = useState(books);

  const filterBooks = (id: string): void => {
    const filtered = books.filter((book) => book.id !== id);
    setBookList(filtered);
  };

  const pathName = getPathFromName(country);

  return (
    <>
      {!bookList.length ? (
        <></>
      ) : (
        <>
          <div style={{ width: '90vw', marginTop: '1rem', padding: '1.1rem' }}>
            <Typography variant="h4" style={{ fontSize: '1.8rem' }}>
              {shelf ? (
                <Link href={`/countries/${pathName}`}>
                  <a style={{ textDecoration: 'none' }}>{country}</a>
                </Link>
              ) : (
                <>{country}</>
              )}
            </Typography>
          </div>
          <div className={styles.listContainer}>
            {bookList.map((book) => {
              let cover: string;
              book.cover.includes('i.imgur')
                ? (cover = '/fallback-cover.png')
                : (cover = book.cover);

              return (
                <BookItem
                  key={book.id}
                  country={country}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  cover={cover}
                  shelf={shelf}
                  filterBooks={filterBooks}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
