import Head from "next/head";
import "@/styles/app.css";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SCRC 2024</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
