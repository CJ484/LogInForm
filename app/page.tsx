"use client";
import React from "react";
import styles from "./Styles/page.module.scss";
import Link from "next/link";
import * as dotenv from "dotenv";

const Home = () => {
  dotenv.config();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Authorization App</h1>
      <div className={styles.navigation}>
        <Link className={styles.nav_button} href="/pages/login">
          Log in
        </Link>{" "}
        <Link className={styles.nav_button} href="/pages/register">
          Register
        </Link>{" "}
        <Link className={styles.nav_button} href="/pages/displaydata">
          DisplayData
        </Link>
      </div>
    </main>
  );
};

export default Home;
