import Layout from '../containers/Layout';
import { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import ShelfWantToRead from '../components/ShelfWantToRead/ShelfWantToRead';
import ShelfRead from '../components/ShelfRead/ShelfRead';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '50rem',
  },
  button: { color: 'rgb(255, 255, 255)', backgroundColor: '#2c5075' },
};

export default function MyShelf(): React.ReactElement {
  const [defaultShelf, setDefaultShelf] = useState(true);

  const handleClick = () => {
    setDefaultShelf(!defaultShelf);
  };

  return (
    <Layout title="Shelf">
      <div style={styles.container}>
        <ButtonGroup
          size="large"
          variant="text"
          color="primary"
          fullWidth
          aria-label="text primary button group"
        >
          <Button
            style={defaultShelf ? styles.button : {}}
            onClick={handleClick}
          >
            Want to read
          </Button>
          <Button
            style={!defaultShelf ? styles.button : {}}
            onClick={handleClick}
          >
            Read
          </Button>
        </ButtonGroup>
      </div>
      {defaultShelf ? <ShelfWantToRead /> : <ShelfRead />}
    </Layout>
  );
}
