import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import PastLaunches from "../components/PastLaunches";

export default function ClientSide() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Past SpaceX Launches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Past SpaceX Launches</h1>
        <ClientOnly>
          <PastLaunches />
        </ClientOnly>
      </main>
    </div>
  );
}