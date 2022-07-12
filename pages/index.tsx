import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="text-neutral-600">
      <Head>
        <title>ARCHIVE</title>
        <meta name="description" content="ARCHIVE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </div>
  );
};

export default Home;
