import styles from './MarkerInfo.module.css';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { countryCodeEmoji } from 'country-code-emoji';

interface MarkerInfoProps {
  alpha2: string;
  countryName: string;
  numberOfBooks: number;
}

export default function MarkerInfo({ alpha2, countryName, numberOfBooks }) {
  return (
    <Paper elevation={3} className={styles.infoContainer}>
      <Typography variant="body2" noWrap style={{ fontWeight: 700 }}>
        {countryCodeEmoji(alpha2)}&nbsp;&nbsp;{countryName}
      </Typography>
      <Typography variant="body2" noWrap>
        Explore {numberOfBooks} books
      </Typography>
    </Paper>
  );
}

/*
export default function MarkerInfo({ alpha2, countryName, numberOfBooks }) {
  return (
    <div className={styles.infoContainer}>
      <Typography variant="body2" noWrap className={styles.countryName}>
        {countryCodeEmoji(alpha2)}&nbsp;&nbsp;{countryName}
      </Typography>
      <Typography variant="body2" noWrap>
        Explore {numberOfBooks} books
      </Typography>
    </div>
  );
} */
