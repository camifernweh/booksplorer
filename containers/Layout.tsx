import Head from 'next/head';
import { getTitleString } from '../lib/utils/strings';
import styles from './Layout.module.css';
import NavBar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string | string[];
}

export default function Layout({
  children,
  title,
}: LayoutProps): React.ReactElement {
  const titleToBeDisplayed = getTitleString(title);
  const isHome = title === 'Home';

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{titleToBeDisplayed}</title>
      </Head>
      {!isHome && <NavBar />}
      <main
        className={isHome ? styles.layout : `${styles.layout} ${styles.margin}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
