import Link from 'next/link';
import { Typography, useMediaQuery } from '@material-ui/core';
import styles from './NavBar.module.css';

export default function NavBar() {
  const breakPoint = useMediaQuery('(max-width:600px)');

  return (
    <header className={styles.nav}>
      <Link href="/">
        <a>
          <img
            src={breakPoint ? '/monogram.png' : '/booksplorer-blue.png'}
            className={breakPoint ? styles.logoImg : styles.fullLogo}
          ></img>
        </a>
      </Link>
      <div className={styles.linkContainer}>
        <Link href="/shelf">
          <a className={styles.link}>
            <Typography style={{ fontSize: '1.1rem' }}>My Books</Typography>
          </a>
        </Link>
        <Link href="/#explore">
          <a className={styles.link}>
            <Typography style={{ fontSize: '1.1rem' }}>Explore</Typography>
          </a>
        </Link>
      </div>
    </header>
  );
}
