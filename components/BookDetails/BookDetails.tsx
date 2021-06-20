import { useState, useEffect } from 'react';
import { Paper, Typography, Button, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import Image from 'next/image';
import styles from './BookDetails.module.css';

interface BookDetailsProps {
  country: string;
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  open: boolean;
  handleClose: () => void;
}

export default function BookDetails({
  country,
  id,
  title,
  author,
  description,
  cover,
  open,
  handleClose,
}: BookDetailsProps) {
  const checkShelf = (id: string): boolean => {
    return Boolean(localStorage.getItem(id));
  };

  const [isOnShelf, setIsOnShelf] = useState(false);

  useEffect(() => {
    setIsOnShelf(checkShelf(id));
  }, []);

  const handleClick = () => {
    if (!isOnShelf) {
      const book = { country, title, author, description, cover };
      localStorage.setItem(id, JSON.stringify(book));
      setIsOnShelf(true);
    } else {
      localStorage.removeItem(id);
      setIsOnShelf(false);
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
          <Button
            variant="contained"
            color="primary"
            startIcon={!isOnShelf ? <AddIcon /> : <CheckIcon />}
            onClick={handleClick}
          >
            My Shelf
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}
