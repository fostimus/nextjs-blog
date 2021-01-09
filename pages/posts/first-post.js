import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

// Next.js requirement: must export default, but can have any name
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        {/* doing client-side nav in Next, wrap anchor tag with Link from next/link
          client side nav is all JS - not the browser, which JS is faster*/}
        <Link href="/">
          {/* add css classes to anchor tag*/}
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
