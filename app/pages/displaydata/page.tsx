
import { PrismaClient } from "@prisma/client";

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
      <h1>Display Data</h1>
      {allUsers()}
    </div>
  );
};

export default DisplayDataPage;
