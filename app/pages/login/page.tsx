import { UserLogIn } from "@/app/Component";
import Link from "next/link";

const login = () => {
  return (
    <div>
      <Link href="/">Go back</Link>
      <UserLogIn />
    </div>
  );
};

export default login;