import { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { SideDrawer } from "./header/SideDrawer";
import { ReadContext, UpdateContext } from "../Context";
import {
  Menu,
  Close,
  Logout,
  Settings,
  PersonOutline,
} from "@mui/icons-material";
import {
  Box,
  AppBar,
  Button,
  Divider,
  Popover,
  useTheme,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const Header = () => {
  const { auth } = ReadContext();
  const update = UpdateContext();

  const [active, setActive] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(null);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header style={{ marginBottom: "5rem" }}>
      <AppBar open={active} position="fixed" color="primary">
        <Box
          m={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            sx={{ mr: 3 }}
            aria-label="Menu"
            onClick={() => setActive(!active)}
          >
            {active ? <Close color="secondary" /> : <Menu color="secondary" />}
          </IconButton>
          <Link to="/">
            <img
              style={{ height: "2rem", width: "auto" }}
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
          {isMatch ? (
            <></>
          ) : (
            <Box sx={{ textAlign: "center", width: "100%", ml: 4, mr: 4 }}>
              <input
                type="text"
                placeholder="Search"
                className={style.search_bar}
              />
            </Box>
          )}
          &nbsp; &nbsp;
          {auth ? (
            <>
              <img
                alt="User"
                className={style.profile_btn}
                src="/images/user-placeholder.png"
                onClick={(e) => {
                  setShowPopover(true);
                  setPopoverAnchor(e.currentTarget);
                }}
              />

              <Popover
                open={showPopover}
                anchorEl={popoverAnchor}
                onClose={() => {
                  setShowPopover(false);
                  setPopoverAnchor(null);
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Box m={2}>
                  <Link to="/profile">
                    <Box display="flex" pl={2} pr={2}>
                      <PersonOutline />
                      &nbsp; &nbsp; &nbsp;
                      <Typography>
                        <b>Profile</b>
                      </Typography>
                    </Box>
                  </Link>
                  <br />
                  <Link to="/settings">
                    <Box display="flex" pl={2} pr={2}>
                      <Settings />
                      &nbsp; &nbsp; &nbsp;
                      <Typography>
                        <b>Settings</b>
                      </Typography>
                    </Box>
                  </Link>
                  <br />
                  <Divider />
                  <br />
                  <Button
                    variant="text"
                    onClick={() => {
                      update.UpdateAuth();
                      setShowPopover(false);
                      sessionStorage.clear();
                    }}
                  >
                    <Box display="flex" pl={2} pr={2}>
                      <Logout />
                      &nbsp; &nbsp; &nbsp;
                      <Typography>
                        <b>Logout</b>
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </Popover>
            </>
          ) : (
            <Link to="/login" id="login-btn">
              <Button variant="contained" color="error">
                <Typography>
                  <b>Login</b>
                </Typography>
              </Button>
            </Link>
          )}
        </Box>
      </AppBar>

      <SideDrawer status={active} />
    </header>
  );
};
