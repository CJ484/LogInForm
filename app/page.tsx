"use client";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Authorization App</h1>
      <div>
        <Link href="/pages/login">
          Log in
        </Link>
        {" "}
        <Link href="/pages/register">
          Register
        </Link>
      </div>
    </main>
  );
};

export default Home;
