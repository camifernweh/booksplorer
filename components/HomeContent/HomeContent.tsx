import { Typography } from '@material-ui/core';
import styles from './HomeContent.module.css';

export default function HomeContent(): React.ReactElement {
  return (
    <div className={styles.div}>
      <Typography align="center" variant="h3">
        Start exploring 📖
      </Typography>

      <div className={styles.container}>
        <div className={styles.itemContainer}>
          <img src="/globe.png" className={styles.img} />
          <Typography align="center" style={{ fontSize: '1.3rem' }}>
            Where do you want to go?
          </Typography>
        </div>
        <div className={`${styles.itemContainer} ${styles.middle}`}>
          {' '}
          <img src="/magnifier.png" className={styles.img} />{' '}
          <Typography align="center" style={{ fontSize: '1.3rem' }}>
            Pick a destination
          </Typography>
        </div>
        <div className={styles.itemContainer}>
          <img src="/bookshelf.png" className={styles.img} />
          <Typography align="center" style={{ fontSize: '1.3rem' }}>
            Add books to your shelf and bon voyage!
          </Typography>
        </div>
      </div>
    </div>
  );
}
