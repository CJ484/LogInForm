
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const DisplayDataPage = () => {
  const prisma = new PrismaClient();

  const allUsers = async () => {
    const users = await prisma.user.findMany();
    console.log(users);
    return (
      <div>
        {users.map((user: any, index: number) => (
          <div key={index}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Link href="/">
        Go back
      </Link>
      <h1>Display Data</h1>
      {allUsers()}
    </div>
  );
};

export default DisplayDataPage;
