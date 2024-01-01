"use client";
import { useState, useEffect } from "react";
import { Button, Input } from "@mui/joy";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { LocateUser, UpdateInfo } from "../../api";
import styles from "../../Styles/page.module.scss";

const Home = () => {
  const [accountInfo, setAccountInfo] = useState({} as any);
  const [logInToken, setLogInToken] = useState("" as String);
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const { push } = useRouter();


  const updatePassword = () => {
    const idToken: any = sessionStorage.getItem("sessionToken");
    toast.promise(UpdateInfo(idToken, newPasswordInput), {
      loading: "Updating Password...",
      success: "Password Updated",
      error: (err) => `${err.toString()}`,
    });
    setNewPasswordInput("");
  }

  const logOut = () => {
    sessionStorage.removeItem("sessionToken");
    push("/");
  };

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
      <h2>Your Current Password is hashed </h2>
      <div>
        <Input
          required
          className={styles.form_input}
          placeholder="New Password"
          value={newPasswordInput}
          onChange={(e) => setNewPasswordInput(e.target.value)}
        />
        <Button sx={{ margin: "1rem" }} onClick={() => updatePassword()}>
          Update Password
        </Button>
      </div>
      <Button
        sx={{ margin: "1rem" }}
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </Button>
      <Toaster />
    </div>
  );
};

export default Home;
