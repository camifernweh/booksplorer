import { useState } from 'react';
import styles from './Marker.module.css';
import Image from 'next/image';
import MarkerInfo from '../MarkerInfo/MarkerInfo';

interface MarkerProps {
  lat: number;
  lng: number;
  countryName: string;
  numberOfBooks: number;
  bookCover: string;
}

export default function Marker({
  countryName,
  numberOfBooks,
  bookCover,
}: MarkerProps): React.ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.markerContainer}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className={styles.imgContainer}>
        <Image
          src={bookCover}
          width={25}
          height={35}
          className={styles.markerImg}
        ></Image>
      </div>

      {isHovered && (
        <MarkerInfo countryName={countryName} numberOfBooks={numberOfBooks} />
      )}
    </div>
  );
}
