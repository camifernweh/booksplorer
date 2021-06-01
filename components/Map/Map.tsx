import GoogleMapReact from 'google-map-react';
import { CountriesProps } from '../../pages';
import styles from './Map.module.css';
import Marker from '../Marker/Marker';
import { getBookCoverUrl } from '../../lib/utils/strings';

export default function Map({ countries }: CountriesProps): React.ReactElement {
  return (
    <>
      <div className={styles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPS_API_KEY }}
          defaultCenter={{ lat: 24.44, lng: -35.35 }}
          defaultZoom={0}
        >
          {countries.map((country) => {
            let bookCover = getBookCoverUrl(country.books);
            if (bookCover === 'fallback') bookCover = '/small-cover.png';

            return (
              <Marker
                key={country.id}
                lat={country.lat}
                lng={country.long}
                alpha2={country.alpha2}
                bookCover={bookCover}
                countryName={country.name}
                numberOfBooks={country.books.length}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    </>
  );
}
