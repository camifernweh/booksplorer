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
  filterBooks?: (id: string) => void;
}

export default function BookList({
  country,
  books,
  shelf,
  filterBooks,
}: BookListProps): React.ReactElement {
  const pathName = getPathFromName(country);

  return (
    <>
      {!books.length ? (
        <></>
      ) : (
        <>
          <div className={styles.title}>
            <Typography variant="h4" style={{ fontSize: '1.7rem' }}>
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
            {books.map((book) => {
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
