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
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Paper>
        <div className={styles.container}>
          <Image src={cover} alt="Book cover" width={150} height={200} />
          <Typography>
            {title}
            {author}
            {description}
          </Typography>
        </div>
      </Paper>
    </Popover>
  );
}
