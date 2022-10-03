import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Find Work in Korea</h1>
      <Link href="/login">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Responsive
        </button>
      </Link>
    </div>
  );
};

export default Home;
