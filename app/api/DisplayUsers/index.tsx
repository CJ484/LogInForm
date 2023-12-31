import axios from "axios";
import styles from "../../Styles/page.module.scss";

const DisplayUsers = async () => {
  const apiUrlDisplay = process.env.NEXT_PUBLIC_API_URL_DISPLAY;

  const data = await axios
    .get(apiUrlDisplay!, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response: any) => {
      const data = response.data.results;
      return (
        <>
          {data.map((user: any) => (
            <div className={styles.users} key={user.firstName + user.lastName}>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
            </div>
          ))}
        </>
      );
    });

  return data;
};

export default DisplayUsers;