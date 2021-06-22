import { Typography } from '@material-ui/core';
import styles from './Footer.module.css';

export default function Footer(): React.ReactElement {
  const year: string = new Date().getFullYear().toString();

  return (
    <footer className={styles.footer}>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        style={{ fontSize: '1rem' }}
      >
        &copy; {year} Booksplorer
      </Typography>
    </footer>
  );
}
