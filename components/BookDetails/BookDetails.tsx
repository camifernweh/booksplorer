import { Popover, Paper, Typography, Button, Modal } from '@material-ui/core';
import Image from 'next/image';
import styles from './BookDetails.module.css';

interface BookDetailsProps {
  title: string;
  author: string;
  description: string;
  cover: string;
  open: boolean;
  handleClose: () => void;
}

export default function BookDetails({
  title,
  author,
  description,
  cover,
  open,
  handleClose,
}: BookDetailsProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className={styles.paper}>
        <div className={styles.container}>
          <div className={styles.coverContainer}>
            <Image src={cover} alt="Book cover" width={150} height={220} />
          </div>
          <div className={styles.info}>
            <Typography variant="h5">{title}</Typography>
            <Typography> {author}</Typography>
            <Typography variant="body1">{description}</Typography>
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <Button variant="contained" onClick={handleClose}>
            Add to Shelf
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}
