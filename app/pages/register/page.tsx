import { CreateNewUser } from "@/app/Component"
import styles from "@/app/Styles/page.module.scss";
const register = () => {
    return (
      <div className={styles.page}>
        <CreateNewUser />
      </div>
    );
}

export default register;