import { Typography } from '@material-ui/core';
import styles from './Footer.module.css';

export default function Footer(): React.ReactElement {
  const year: string = new Date().getFullYear().toString();

  return (
    <footer>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        style={{ fontSize: '1rem' }}
        className={styles.footer}
      >
        &copy; {year} Booksplorer. All rights reserved.
      </Typography>
    </footer>
  );
}
