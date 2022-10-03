import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Button.module.css";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg"
        height="150"
        width="150"
        alt="Thomas Biarneix PP"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div className={styles.buttons}>
        <button
          type="button"
          // Note how the "error" class is accessed as a property on the imported
          // `styles` object.
          className={styles.add}
        >
          <Link href="/posts">Add</Link>
        </button>
        <button
          type="button"
          // Note how the "error" class is accessed as a property on the imported
          // `styles` object.
          className={styles.error}
        >
          Destroy
        </button>
      </div>
    </Layout>
  );
}
// https://nextjs.org/learn/basics/assets-metadata-css/assets
