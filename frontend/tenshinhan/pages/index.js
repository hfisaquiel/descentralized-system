import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olha o Thenshinhan</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/images/tenshinhan.jpg"
          alt="la imajen"
          width="720"
          height="602"
        />
        <h1 className={styles.title}>Welcome to Thenshinhan</h1>

        <p className={styles.description}>Hosted on static Next</p>
      </main>
    </div>
  );
}
