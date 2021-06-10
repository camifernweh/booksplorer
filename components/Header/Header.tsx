import Typewriter from 'typewriter-effect';
import styles from './Header.module.css';

export default function Header(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Hello World!')
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
}
