import { CreateNewUser } from "@/app/Component"
import Link from "next/link";

const register = () => {
    return (
      <div>
        <Link href="/">Go back</Link>
        <CreateNewUser />
      </div>
    );
}

export default register;