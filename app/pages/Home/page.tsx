"use client";
import { useState, useEffect, use } from "react";
import axios from "axios";

const Home = () => {
  const [accountInfo, setAccountInfo] = useState({} as any);
  const [logInToken, setLogInToken] = useState("" as String);
  const apiUrlLocate = process.env.REACT_APP_API_URL_LOCATE;

  useEffect(() => {
    setTimeout(() => {
      console.log('checking for session token');
      
      const idToken: any = sessionStorage.getItem("sessionToken");
      if (idToken) {
        setLogInToken(idToken);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    const idToken: any = sessionStorage.getItem("sessionToken");
    const fetchData = async () => {
      try {
        const response = await axios.post(apiUrlLocate!, {
          id: idToken,

          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const datainfo = response.data.user;
        console.log(datainfo);
        setAccountInfo(datainfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Check if idToken is available before making the request
    if (idToken) {
      fetchData();
    }
  }, [logInToken]); // Only re-run the effect if idToken changes

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Welcome back!</h2>
      <h2>
        {accountInfo.firstName} {accountInfo.lastName}
      </h2>
    </div>
  );
};

export default Home;
