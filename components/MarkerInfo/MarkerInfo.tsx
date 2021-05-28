interface MarkerInfoProps {
  countryName: string;
  numberOfBooks: number;
}

export default function MarkerInfo({ countryName, numberOfBooks }) {
  return (
    <div>
      {countryName}
      <p>Explore {numberOfBooks} books</p>
    </div>
  );
}
