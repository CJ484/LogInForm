import { PrismaClient } from "@prisma/client";

type User = {
  nameInput: string;
  emailInput: string;
};

const AddUser = async ({ nameInput, emailInput }: User) => {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      name: nameInput,
      email: emailInput,
    },
  });
  return console.log("User has been added");
};

export default AddUser;
