import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olha o Freeza</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Script type="text/javascript" src="./js/hover-background.js" />
      <Image
        alt="dbz scenario"
        src="images/scenario-background.jpg"
        id="site-background"
        fill
        quality={100}
        className={styles.imageCover}
      />

      <main className={styles.main}>
        <Image
          src="images/Freeza-call.png"
          alt="Freeza"
          width="300"
          height="500"
        />
        <h1 className={styles.title}>Welcome to Freeza!</h1>

        <p className={styles.description}>Hosted on Dynamic Next Host</p>
      </main>
    </div>
  );
}
