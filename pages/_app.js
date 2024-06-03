import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ashish Narawariya Portfolio</title>
      </Head>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
