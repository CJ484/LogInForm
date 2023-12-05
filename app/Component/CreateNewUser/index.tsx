'use client';
import { Input, Button } from "@mui/joy";
import styles from "../../page.module.scss";

const CreateNewUser = () => {
  const submission = (e: any) => {
    e.preventDefault();
    console.log("User Log In Submitted");
  };

  return (
    <form onSubmit={submission} className={styles.form}>
      <h2>Already have an Account? Log in Here!</h2>
      <Input className="form__input" placeholder="First Name" />
      <Input className="form__input" placeholder="Last Name" />
      <Input className="form__input" placeholder="Email" />
      <Input className="form__input" placeholder="Password" />
      <Input className="form__input" placeholder="Confirm Password" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateNewUser;
