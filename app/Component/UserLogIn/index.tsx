"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthenticateLogin } from "..";
import { Input, Button } from "@mui/joy";
import BackButton from "@/app/assets/symbols/arrow_left";
import styles from "../../Styles/page.module.scss";
import { useRouter } from "next/navigation";

const UserLogIn = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [logInStatus, setLogInStatus] = useState(false);
  const { push } = useRouter();

  const resetForm = () => {
    setEmailInput("");
    setPasswordInput("");
  };

  const submission = (e: any) => {
    e.preventDefault();
    if (
      !AuthenticateLogin({ email: emailInput, password: passwordInput }) ===
      false
    ) {
      console.log("User Log In Successful");
      resetForm();
      setLogInStatus(true);
    } else {
      console.log("User Log In Failed");
    }
  };

  useEffect(() => {
    if (logInStatus === true) {
      console.log("changing page");
      push("/pages/Home");
    }
  }, [logInStatus]);

  return (
    <>
      <form onSubmit={submission} className={styles.form}>
      <Link className={styles.backButton} href="/"><BackButton /> Go back</Link>
        <h2>Log In</h2>
        <a className={styles.links} href="../pages/register">
          <h3>or Create an Account</h3>
        </a>
        <Input
          className={styles.form_input}
          placeholder="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <Input
          className={styles.form_input}
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <Button className={styles.form_button} type="submit">
          Log In
        </Button>
      </form>
    </>
  );
};

export default UserLogIn;
