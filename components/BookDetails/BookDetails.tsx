import { Popover, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import styles from './BookDetails.module.css';

interface BookDetailsProps {
  title: string;
  author: string;
  description: string;
  cover: string;
  popoverId: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}

export default function BookDetails({
  title,
  author,
  description,
  cover,
  popoverId,
  open,
  anchorEl,
  handleClose,
}: BookDetailsProps) {
  return (
    <Popover
      id={popoverId}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 100, left: 375 }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Paper>
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
          <button onClick={handleClose}>CLOSE</button>
        </div>
      </Paper>
    </Popover>
  );
}
