import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../public/hero.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nr-wazid(⊙_◎)</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="wazid naimur rahman" />
        <meta name="author" content="naimur rahman wazid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="backend dev" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>IN PROGRESS!</h1>
        <Image
          src={hero}
          alt="Picture of the author"
          width={250}
          height={500}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </main>
    </div>
  );
}
