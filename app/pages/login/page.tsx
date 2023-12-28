import { UserLogIn } from "@/app/Component";
import Link from "next/link";
import styles from "@/app/Styles/page.module.scss";

const login = () => {
  return (
    <div className={styles.page}>
      <UserLogIn />
    </div>
  );
};

export default login;