import Head from "next/head";
// Global Main style
import "../styles/main.scss";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return null;
  }
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
