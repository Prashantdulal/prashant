import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Download</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <a href="/abcd.exe" download>
          <button className={`${styles.button} ${styles.big} ${styles.colorful}`}>
            Download
          </button>
        </a>
      </main>
    </div>
  );
}
