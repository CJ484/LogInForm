import axios from "axios";

type AuthenticateLoginTypes = {
  email: string;
  password: string;
};

const AuthenticateLogin = async ({
  email,
  password,
}: AuthenticateLoginTypes) => {
  const apiUrlAuth = process.env.REACT_APP_API_URL_AUTH;
  await axios
    .post(apiUrlAuth!, {
      // @ts-ignore
      // This is a bug in the @types/axios package.
      // The body property is not recognized as a valid property.
      email: email,
      password: password,

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    } as any)
    .then((response) => {
      sessionStorage.setItem("sessionToken", response.data.results);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export default AuthenticateLogin;
