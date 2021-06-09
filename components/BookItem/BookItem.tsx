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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  return (
    <Card
      aria-describedby={popoverId}
      onClick={handleClick}
      key={id}
      className={styles.bookCard}
    >
      <CardActionArea>
        <CardMedia image={cover} className={styles.bookCover} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h6">{author}</Typography>
        </CardContent>
      </CardActionArea>
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
    </Card>
  );
}
