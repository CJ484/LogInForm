"use client";
import { AddUser } from "../../api";
import { useState } from "react";
import { isEqual } from "lodash";
import { Input, Button } from "@mui/joy";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "@/app/assets/symbols/arrow_left";
import styles from "../../Styles/page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CreateNewUser = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordCypherInput, setPasswordCypherInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
  const { push } = useRouter();

  const isFormValid = () => {
    if (isEqual(passwordCypherInput, passwordConfirmInput)) {
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
      toast.error("Passwords do not match");
      return;
    }
    toast.promise(
      AddUser({
        firstNameInput: firstNameInput,
        lastNameInput: lastNameInput,
        emailInput: emailInput,
        passwordCypherInput: passwordCypherInput,
      }),
      {
        loading: "Creating User...",
        success: "User Creation Successful",
        error: "User Creation Failed",
      }
    )
    .then(() => {
      resetForm();
      push("/pages/login");
    })
    .catch((error) => {
      return error;
    });
  };

  return (
    <>
      <form onSubmit={submission} className={styles.form}>
        <Link href="/" className={styles.backButton}>
          <BackButton />
          Go back
        </Link>
        <h2 className={styles.form_title}>Creating an Account is Easy</h2>
        <h3 className={styles.form_title}>Just fill out the form below!</h3>
        <Link href="../pages/login" className={styles.links}>
          Already have an Account? Log in Here!
        </Link>
        <Input
          required
          className={styles.form_input}
          placeholder="First Name"
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
        />
        <Input
          required
          className={styles.form_input}
          placeholder="Last Name"
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)}
        />
        <Input
          required
          className={styles.form_input}
          placeholder="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <Input
          required
          className={styles.form_input}
          placeholder="Password"
          value={passwordCypherInput}
          onChange={(e) => setPasswordCypherInput(e.target.value)}
        />
        <Input
        required
        
        className={styles.form_input}
        placeholder="Confirm Password"
        value={passwordConfirmInput}
        onChange={(e) => setPasswordConfirmInput(e.target.value)}
      />
        <Button className={styles.form_button} type="submit">
          Create
        </Button>
      </form>
      <Toaster />
    </>
  );
};

export default CreateNewUser;
