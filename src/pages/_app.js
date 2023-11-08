import Head from "next/head";
import "@/styles/app.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SCRC 2024</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
