import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import styles from './BookList.module.css';
import { Book } from '../../lib/types';

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps): React.ReactElement {
  return (
    <div className={styles.listContainer}>
      {books.map((book) => {
        let cover: string;
        book.cover.includes('i.imgur')
          ? (cover = '/fallback-cover.png')
          : (cover = book.cover);

        return (
          <Card key={book.id} className={styles.bookCard}>
            <CardActionArea>
              <CardMedia image={cover} className={styles.bookCover} />
              <CardContent>
                <Typography variant="h5">{book.title}</Typography>
                <Typography variant="h6">{book.author}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
