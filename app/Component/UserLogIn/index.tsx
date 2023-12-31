"use client";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Button } from "@mui/joy";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  FilledInput,
} from "@mui/material";
import { useRouter } from "next/navigation";
import AuthenticateLogin from "../../api/AuthenticateLogin";
import BackButton from "@/app/assets/symbols/arrow_left";
import styles from "../../Styles/page.module.scss";

const UserLogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [logInStatus, setLogInStatus] = useState(false);
  const { push } = useRouter();

  const resetForm = () => {
    setEmailInput("");
    setPasswordInput("");
  };

  const submission = (e: any) => {
    e.preventDefault();
    if (
      !AuthenticateLogin({ email: emailInput, password: passwordInput }) ===
      false
    ) {
      toast.success("Log In Successful");
      resetForm();
      setLogInStatus(true);
    } else {
      toast.error("Log In Failed");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (logInStatus === true) {
      push("/pages/Home");
    }
  }, [logInStatus]);

  return (
    <>
      <form onSubmit={submission} className={styles.form}>
        <Link className={styles.backButton} href="/">
          <BackButton /> Go back
        </Link>
        <h2>Log In</h2>
        <a className={styles.links} href="../pages/register">
          <h3>or Create an Account</h3>
        </a>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
          <FilledInput
            id="filled-adornment-email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button className={styles.form_button} type="submit">
          Log In
        </Button>
      </form>
      <Toaster />
    </>
  );
};

export default UserLogIn;
