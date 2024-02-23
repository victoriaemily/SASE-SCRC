import Head from "next/head";
import "@/styles/app.css";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
		<Layout>
			<Head>
				<title>SCRC 2024</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
