'use client';
import React from "react";
import styles from "./page.module.scss";
import { CreateNewUser, UserLogIn } from "./Component";

const Home = ()=> {
    return (
    <main className={styles.main}>
      <h1 className={styles.title}>Authorization App</h1>
      <div>
        <CreateNewUser />
        <UserLogIn />
      </div>
    </main>
  );
}

export default Home;
