import { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Menu, Close, PersonOutline } from "@mui/icons-material";
import {
  Box,
  Drawer,
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

export const Header = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const [active, setActive] = useState(false);

  return (
    <>
      <AppBar
        open={active}
        elevation={0}
        position="fixed"
        color="primary"
        sx={{ pt: 1, pb: 1 }}
      >
        <Toolbar>
          <IconButton onClick={() => setActive(!active)} sx={{ mr: 3 }}>
            {active ? <Close color="secondary" /> : <Menu color="secondary" />}
          </IconButton>
          <Link to="/">
            <img
              style={{ height: "2.5rem", width: "auto" }}
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
          <Box sx={{ textAlign: "center", width: "100%", ml: 5, mr: 5 }}>
            <input
              type="text"
              placeholder="Search"
              className={style.search_bar}
            />
          </Box>
          {isLoggedIn == "true" ? (
            <Link to="/profile">
              <div className={style.profile_btn}>
                <PersonOutline color="secondary" />
                <Typography sx={{ ml: 2 }}>
                  <b>Himanshu</b>
                </Typography>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="contained" color="error">
                <Typography>
                  <b>Login</b>
                </Typography>
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          zIndex: "2",
          width: "250px",
          position: "relative",
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            width: "250px",
            border: 0,
          },
        }}
        open={active}
        variant="persistent"
        anchor="left"
      >
        <Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>

        <Box sx={{ pl: 4 }}>
          <Link to="/">
            <Typography color="white">
              <b>Home</b>
            </Typography>
          </Link>
          <br />
          <br />
          <Link to="/shows">
            <Typography color="white">
              <b>Shows</b>
            </Typography>
          </Link>
          <br />
          <br />
          <Link to="/movies">
            <Typography color="white">
              <b>Movies</b>
            </Typography>
          </Link>
          <br />
          <br />
          <Link to="/news">
            <Typography color="white">
              <b>News</b>
            </Typography>
          </Link>
          <br />
          <br />
          <Link to="/kids">
            <Typography color="white">
              <b>Kids</b>
            </Typography>
          </Link>
          <br />
          <br />
          <Link to="/music">
            <Typography color="white">
              <b>Music</b>
            </Typography>
          </Link>
        </Box>
      </Drawer>

      <Box>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};
