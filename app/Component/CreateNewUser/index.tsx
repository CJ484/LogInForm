"use client";
import { AddUser } from "..";
import { useState } from "react";
import { isEqual, isEmpty } from "lodash";
import { Input, Button } from "@mui/joy";
import styles from "../../Styles/page.module.scss";
import Link from "next/link";

const CreateNewUser = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordCypherInput, setPasswordCypherInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");

  const isFormValid = () => {
    if (
      isEqual(passwordCypherInput, passwordConfirmInput) ||
      isEmpty(passwordCypherInput) ||
      isEmpty(firstNameInput) ||
      isEmpty(lastNameInput) ||
      isEmpty(emailInput)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const resetForm = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setPasswordCypherInput("");
    setPasswordConfirmInput("");
  };

  const submission = async (e: any) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.log("Passwords do not match");
      return;
    } else {
      console.log("Passwords match");
    }
    if (
      !AddUser({
        firstNameInput: firstNameInput,
        lastNameInput: lastNameInput,
        emailInput: emailInput,
        passwordCypherInput: passwordCypherInput,
      }) === false
    ) {
      console.log("User Creation Successful");
      
      resetForm();
    } else {
      console.log("User Creation Failed");
      return;
    }
  };

  return (
    <form onSubmit={submission} className={styles.form}>
      <Link href="../pages/login">Already have an Account? Log in Here!</Link>
      <Input
        className="form__input"
        placeholder="First Name"
        value={firstNameInput}
        onChange={(e) => setFirstNameInput(e.target.value)}
      />
      <Input
        className="form__input"
        placeholder="Last Name"
        value={lastNameInput}
        onChange={(e) => setLastNameInput(e.target.value)}
      />
      <Input
        className="form__input"
        placeholder="Email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Input
        className="form__input"
        placeholder="Password"
        value={passwordCypherInput}
        onChange={(e) => setPasswordCypherInput(e.target.value)}
      />
      <Input
        className="form__input"
        placeholder="Confirm Password"
        value={passwordConfirmInput}
        onChange={(e) => setPasswordConfirmInput(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateNewUser;
