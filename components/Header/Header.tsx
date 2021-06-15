import Typewriter from 'typewriter-effect';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './Header.module.css';
import Navbar from '../NavBar/Navbar';
import { useInView } from 'react-intersection-observer';

export default function Header(): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <>
      <div ref={ref} className={styles.container}>
        <img src="/booksplorer.png" className={styles.logo} />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span style="font-size: 1.2rem; color: #ffffff">Travel The World, One Book At A Time.</span>',
              )
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            cursor: '<span style="font-size: 1.2rem; color: #ffffff">|</span>',
          }}
        />
        <div className={styles.arrowContainer}>
          <ExpandMoreIcon
            color="secondary"
            style={{ fontSize: '1.8rem' }}
            className={styles.arrow}
          />
        </div>
      </div>
      {!inView && <Navbar />}
    </>
  );
}
