import { useState, MouseEvent } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import BookDetails from '../BookDetails/BookDetails';
import styles from './BookItem.module.css';

interface BookItemProps {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
}

export default function BookItem({
  id,
  title,
  author,
  description,
  cover,
}: BookItemProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.container}>
      <Card
        aria-describedby={popoverId}
        onClick={handleClick}
        key={id}
        className={styles.bookCard}
      >
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
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h6" style={{ fontSize: '0.9rem' }}>
              {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <BookDetails
        title={title}
        author={author}
        description={description}
        cover={cover}
        popoverId={popoverId}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </div>
  );
}
