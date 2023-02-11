import { useState } from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Container, Snackbar, Alert, Button } from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin@gmail.com" && pass === "admin@1234") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <section className={style.main_sec}>
        <header>
          <Link to="/">
            <img
              style={{ height: "2.5rem", width: "auto" }}
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
        </header>
        <Container
          maxWidth="xs"
          sx={{ p: 4, backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <Typography variant="h4">
            <b>Sign In</b>
          </Typography>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={user}
              className={style.input_fields}
              placeholder="Enter your username"
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              value={pass}
              type="password"
              className={style.input_fields}
              placeholder="Enter your password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <br />
            <br />
            <br />
            <Button type="submit" variant="contained" color="error" fullWidth>
              <b>Sign In</b>
            </Button>
          </form>
          <br />
          <br />
          <Typography textAlign="center">
            Didn't Have An Account ? &nbsp;
            <Link to="#">Sign Up</Link>
          </Typography>
        </Container>
      </section>

      <Snackbar
        open={showAlert}
        autoHideDuration={2500}
        onClose={() => setShowAlert(!showAlert)}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={() => setShowAlert(!showAlert)}
        >
          <b>Incorrect Email or Password</b>
        </Alert>
      </Snackbar>
    </>
  );
};
