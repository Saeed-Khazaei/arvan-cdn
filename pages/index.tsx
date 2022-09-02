import Button from '@mui/material/Button';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button variant="contained" color="primary">
          hi
        </Button>
        <Button variant="contained" color="secondary">
          hi
        </Button>
        <Button variant="contained" color="error">
          hi
        </Button>
        <Button variant="contained" color="success">
          hi
        </Button>
        <Button variant="contained" color="warning">
          hi
        </Button>
        <Button variant="contained" color="info">
          hi
        </Button>
      </main>
    </div>
  );
};

export default Home;
