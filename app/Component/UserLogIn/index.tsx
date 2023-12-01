import {Input, Button} from "@mui/joy";
import Link from "next/link";
import styles from "../../page.module.scss";


const UserLogIn = () => {
    const submission = (e: any) => {
        e.preventDefault();
        console.log("User Log In Submitted");
    }

    return (
      <form onSubmit={submission} className={styles.form}>
        <h2>Please Enter Your Credentials or</h2>
        <Link href="#">
          <h2>Create A Free Account</h2>
        </Link>
        <Input className="form__input" placeholder="Username" />
        <Input className="form__input" placeholder="Password" />
        <Button type="submit">Submit</Button>
      </form>
    );
};

export default UserLogIn;