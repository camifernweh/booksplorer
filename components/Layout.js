import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Booksplorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
