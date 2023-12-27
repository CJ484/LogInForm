"use client";
import { useEffect, useState } from "react";
import { AuthenticateLogin } from "..";
import { Input, Button } from "@mui/joy";
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
      push('/pages/Home');
    }
  }, [logInStatus]);

  return (
    <form onSubmit={submission} className={styles.form}>
      <h2>Please Enter Your Credentials or</h2>
      <a href="../pages/register">
        <h2>Create A Free Account</h2>
      </a>
      <Input
        className="form__input"
        placeholder="Email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Input
        className="form__input"
        placeholder="Password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserLogIn;
