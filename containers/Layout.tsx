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
    <div className={styles.layout}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
        />
        <title>{titleToBeDisplayed}</title>
      </Head>
      {!isHome && <NavBar />}
      <main className={isHome ? styles.home : styles.margin}>{children}</main>
      <Footer />
    </div>
  );
}
