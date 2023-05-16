import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <base href={`${process.env.basePath}/`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
