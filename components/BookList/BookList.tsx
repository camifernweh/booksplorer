import styles from './BookList.module.css';
import { Book } from '../../lib/types';
import BookItem from '../BookItem/BookItem';

interface BookListProps {
  country: string;
  books: Book[];
}

export default function BookList({
  country,
  books,
}: BookListProps): React.ReactElement {
  return (
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
          />
        );
      })}
    </div>
  );
}
