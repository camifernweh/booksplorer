import Link from 'next/link';
import { Button } from '@material-ui/core';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={`${styles.nav} ${styles.navVisible}`}>
      <Link href="/">
        <a>
          <img src="/booksplorer-blue.png" className={styles.logo}></img>
        </a>
      </Link>
      <div>
        <Link href="/shelf">
          <a className={styles.link}>
            <Button
              size="large"
              style={{ textTransform: 'none', fontSize: '1.1rem' }}
            >
              My Shelf
            </Button>
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>
            <Button
              size="large"
              style={{ textTransform: 'none', fontSize: '1.1rem' }}
            >
              About
            </Button>
          </a>
        </Link>
      </div>
    </header>
  );
}
