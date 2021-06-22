import Layout from '../containers/Layout';
import ShelfWantToRead from '../components/ShelfWantToRead/ShelfWantToRead';
import ShelfRead from '../components/ShelfRead/ShelfRead';

export default function MyShelf(): React.ReactElement {
  return (
    <Layout title="Shelf">
      <ShelfWantToRead />

      <p>Read:</p>
      <ShelfRead />
    </Layout>
  );
}
