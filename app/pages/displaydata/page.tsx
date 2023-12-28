import axios from "axios";
import Link from "next/link";
import BackButton from "../../assets/symbols/arrow_left";
import styles from "../../Styles/page.module.scss";

const DisplayDataPage = () => {
  const apiUrlDisplay = process.env.NEXT_PUBLIC_API_URL_DISPLAY;
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
          <>
            {data.map((user: any) => (
              <div
                className={styles.users}
                key={user.firstName + user.lastName}
              >
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

  return (
    <div className={styles.displayDatapage}>
      <Link href="/" className={styles.backButton2}>
        <BackButton />
        <p>Go Back</p>
      </Link>
      <h1>Users who have visited</h1>
      <h2>Thank You for seeing my work</h2>
      {allUsers()}
    </div>
  );
};

export default DisplayDataPage;
