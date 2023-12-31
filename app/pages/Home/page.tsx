"use client";
import { useState, useEffect } from "react";
import { LocateUser } from "../../api/index";

const Home = () => {
  const [accountInfo, setAccountInfo] = useState({} as any);
  const [logInToken, setLogInToken] = useState("" as String);

  useEffect(() => {
    setTimeout(() => {
      const idToken: any = sessionStorage.getItem("sessionToken");
      if (idToken) {
        setLogInToken(idToken);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    const idToken: any = sessionStorage.getItem("sessionToken");
    // Check if idToken is available before making the request
    if (idToken) {
      LocateUser(idToken).then((data) => {
        setAccountInfo(data);
      });
    }
  }, [logInToken]);

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
