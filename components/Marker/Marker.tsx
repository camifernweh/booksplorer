import { useState } from 'react';
import styles from './Marker.module.css';
import Image from 'next/image';
import MarkerInfo from '../MarkerInfo/MarkerInfo';

interface MarkerProps {
  lat: number;
  lng: number;
  alpha2: string;
  countryName: string;
  numberOfBooks: number;
  bookCover: string;
}

export default function Marker({
  alpha2,
  countryName,
  numberOfBooks,
  bookCover,
}: MarkerProps): React.ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
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
            layout="fill"
            className={styles.markerImg}
          ></Image>
        </div>
      </div>
      {isHovered && (
        <div className={styles.info}>
          <MarkerInfo
            alpha2={alpha2}
            countryName={countryName}
            numberOfBooks={numberOfBooks}
          />
        </div>
      )}
    </>
  );
}
