import { useState, useEffect } from 'react';
import { Paper, Typography, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image';
import ShelfButton from '../ShelfButton/ShelfButton';
import styles from './BookDetails.module.css';
import { Book } from '../../lib/types';

interface BookDetailsProps {
  country: string;
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  open: boolean;
  shelf?: boolean;
  filterBooks?: (id: string) => void;
  handleClose: () => void;
}

const checkShelf = (id: string): boolean => {
  return Boolean(localStorage.getItem(id));
};

const checkRead = (title: string): boolean => {
  return Boolean(localStorage.getItem(title));
};

export default function BookDetails({
  country,
  id,
  title,
  author,
  description,
  cover,
  open,
  shelf,
  filterBooks,
  handleClose,
}: BookDetailsProps) {
  const [isOnShelf, setIsOnShelf] = useState(false);
  const [isMarkedAsRead, setMarkedAsRead] = useState(false);

  useEffect(() => {
    setIsOnShelf(checkShelf(id));
    setMarkedAsRead(checkRead(title));
  }, [isOnShelf, isMarkedAsRead]);

  const handleToggleFromShelf = () => {
    // save item by id
    if (!isOnShelf) {
      const book = { id, country, title, author, description, cover };
      localStorage.setItem(id, JSON.stringify(book));
      setIsOnShelf(true);
    } else {
      localStorage.removeItem(id);
      setIsOnShelf(false);
      if (shelf) filterBooks(id);
    }
  };

  const handleMarkAsRead = () => {
    // save item by title and add 'read' property
    if (!isMarkedAsRead) {
      const book = {
        id,
        country,
        title,
        author,
        description,
        cover,
        read: true,
      };
      localStorage.setItem(title, JSON.stringify(book));
      setMarkedAsRead(true);
    } else {
      localStorage.removeItem(title);
      setMarkedAsRead(false);
      if (shelf) filterBooks(id);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className={styles.paper}>
        <div className={styles.closeIcon} onClick={handleClose}>
          <CloseIcon />
        </div>
        <div className={styles.container}>
          <div className={styles.coverContainer}>
            <Image src={cover} alt="Book cover" width={150} height={220} />
          </div>
          <div className={styles.info}>
            <Typography variant="h5">{title}</Typography>
            <Typography
              gutterBottom
              variant="h6"
              style={{
                paddingBottom: '0.2rem',
                fontSize: '1rem',
                color: '#808080',
              }}
            >
              {' '}
              {author}
            </Typography>
            <Typography align="justify" variant="body1">
              {description}
            </Typography>
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <ShelfButton
            mainText="Want to read"
            isOnShelf={isOnShelf}
            handleToggleFromShelf={handleToggleFromShelf}
          />
          <ShelfButton
            mainText="Mark as read"
            toggleText="Read"
            bookIcon
            isMarkedAsRead={isMarkedAsRead}
            handleMarkAsRead={handleMarkAsRead}
          />
        </div>
      </Paper>
    </Modal>
  );
}
