import { Input, Button } from "@mui/joy";
import styles from "./page.module.scss";


const CreateNewUser = () => {
    return <form className={styles.form}>
        <h2>Create A Free Account</h2>
        <Input className="form__input" placeholder="First Name" />
        <Input className="form__input" placeholder="Last Name" />
        <Input className="form__input" placeholder="Email" />
        <Input className="form__input" placeholder="Password"/>
        <Input className="form__input" placeholder="Confirm Password"/>
        <Button type="submit">Submit</Button>
    </form>
};

export default CreateNewUser;