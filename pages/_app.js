import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
