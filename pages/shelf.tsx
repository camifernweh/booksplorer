import Layout from '../containers/Layout';
import styles from '../styles/shelf.module.css';
import { useState } from 'react';
import { Typography, Button, ButtonGroup } from '@material-ui/core';
import ShelfWantToRead from '../components/ShelfWantToRead/ShelfWantToRead';
import ShelfRead from '../components/ShelfRead/ShelfRead';

export default function MyShelf(): React.ReactElement {
  const [defaultShelf, setDefaultShelf] = useState(true);

  const handleClick = () => {
    setDefaultShelf(!defaultShelf);
  };

  const buttonStyle = {
    active: {
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(81, 139, 170)',
      padding: '0.7rem',
    },
    normal: {
      padding: '0.7rem',
    },
  };

  return (
    <Layout title="Shelf">
      <div className={styles.container}>
        <Typography variant="h4" align="center" style={{ fontSize: '1.8rem' }}>
          My Books
        </Typography>
        <div className={styles.buttonContainer}>
          <ButtonGroup
            size="large"
            variant="outlined"
            fullWidth
            aria-label="text primary button group"
          >
            <Button
              style={defaultShelf ? buttonStyle.active : buttonStyle.normal}
              onClick={handleClick}
            >
              Want to read
            </Button>
            <Button
              style={!defaultShelf ? buttonStyle.active : buttonStyle.normal}
              onClick={handleClick}
            >
              Read
            </Button>
          </ButtonGroup>
        </div>
      </div>
      {defaultShelf ? <ShelfWantToRead /> : <ShelfRead />}
    </Layout>
  );
}
