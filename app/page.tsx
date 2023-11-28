'use client';

import { Button, Input } from "@mui/joy";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Authorization App</h1>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Please Enter Your Credentials or</h2>
        <Link href="#"><h2>Create A Free Account</h2></Link>
        <Input className="form__input" placeholder="Username" />
        <Input className="form__input" placeholder="Password"/>
        <Button type="submit">Submit</Button>
        </form>
      </div>
    </main>
  );
}
