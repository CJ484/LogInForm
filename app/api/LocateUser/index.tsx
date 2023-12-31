import axios from "axios";

const LocateUser = async (idToken: String) => {
  const apiUrlLocate = process.env.NEXT_PUBLIC_API_URL_LOCATE;
  return await axios
    .post(apiUrlLocate!, {
      id: idToken,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const datainfo = response.data.user;
      return datainfo;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export default LocateUser;
