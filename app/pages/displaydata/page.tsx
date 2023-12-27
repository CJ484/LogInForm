import axios from "axios";
import Link from "next/link";

const DisplayDataPage = () => {
  const apiUrlDisplay = process.env.REACT_APP_API_URL_DISPLAY;
  const allUsers = async () => {
    const data = await axios
      .get(apiUrlDisplay!, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data.results;
        return (
          <div>
            {data.map((user: any) => (
              <div key={user.firstName + user.lastName}>
                <h3>{user.firstName}</h3>
                <h3>{user.lastName}</h3>
              </div>
            ))}
          </div>  
        );
      });

    return data;
  };

  return (
    <div>
      <Link href="/">Go back</Link>
      <h1>Display Data</h1>
      {allUsers()}
    </div>
  );
};

export default DisplayDataPage;
