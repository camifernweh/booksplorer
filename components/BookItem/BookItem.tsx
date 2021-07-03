import { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import BookDetails from '../BookDetails/BookDetails';
import styles from './BookItem.module.css';
import { Book } from '../../lib/types';

interface BookItemProps {
  country: string;
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  shelf?: boolean;
  filterBooks?: (id: string) => void;
}

export default function BookItem({
  country,
  id,
  title,
  author,
  description,
  cover,
  shelf,
  filterBooks,
}: BookItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Card onClick={handleOpen} key={id} className={styles.bookCard}>
        <CardActionArea
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: '100%',
          }}
        >
          <div className={styles.coverContainer}>
            <CardMedia image={cover} className={styles.bookCover} />
          </div>
          <CardContent>
            <Typography
              variant="h6"
              style={{ paddingLeft: '0.1rem', fontSize: '1.2rem' }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              style={{
                paddingLeft: '0.1rem',
                fontSize: '0.9rem',
                color: '#808080',
              }}
            >
              {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <BookDetails
        country={country}
        id={id}
        title={title}
        author={author}
        description={description}
        cover={cover}
        open={isOpen}
        handleClose={handleClose}
        shelf={shelf}
        filterBooks={filterBooks}
      />
    </div>
  );
}
