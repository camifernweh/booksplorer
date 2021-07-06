import { Typography } from '@material-ui/core';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer(): React.ReactElement {
  const year: string = new Date().getFullYear().toString();

  return (
    <footer className={styles.footer}>
      <Typography
        variant="body1"
        align="center"
        color="secondary"
        style={{ fontSize: '1rem', letterSpacing: '0.09rem' }}
      >
        &copy; {year} Booksplorer |{' '}
        <a href="/about" className={styles.about}>
          About
        </a>
      </Typography>
    </footer>
  );
}
