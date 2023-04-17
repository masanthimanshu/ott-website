import { Link } from "react-router-dom";
import SideNavData from "../data/navigation.json";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Grid,
  useTheme,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <footer>
      {isMatch ? (
        <></>
      ) : (
        <Container maxWidth="xl" sx={{ mb: 5, mt: 5 }}>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Link to="/">
                <img
                  style={{ height: "2.5rem", width: "auto" }}
                  src="/images/logo.png"
                  alt="Logo"
                />
              </Link>
              <br />
              <br />
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laudantium quae, corporis laboriosam alias,
                voluptatibus tempora non nam, corrupti veritatis magni
                repudiandae nemo tenetur possimus eius dolorum omnis impedit
                sed?
              </Typography>
              <br />
              <br />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Follow us on :</Typography>
                &nbsp; &nbsp;
                <IconButton
                  color="error"
                  aria-label="Facebook"
                  onClick={() => alert("Clicked")}
                >
                  <Facebook />
                </IconButton>
                &nbsp; &nbsp;
                <IconButton
                  color="error"
                  aria-label="Instagram"
                  onClick={() => alert("Clicked")}
                >
                  <Instagram />
                </IconButton>
                &nbsp; &nbsp;
                <IconButton
                  color="error"
                  aria-label="Twitter"
                  onClick={() => alert("Clicked")}
                >
                  <Twitter />
                </IconButton>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography>
                  <b>Company</b>
                </Typography>
                <br />
                <br />
                <Link to="/about">
                  <Typography sx={{ mb: 1 }}>About Us</Typography>
                </Link>
                <Link to="/contact">
                  <Typography sx={{ mb: 1 }}>Contact Us</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography>
                  <b>Quick Links</b>
                </Typography>
                <br />
                <br />
                {SideNavData.map((e, index) => {
                  return (
                    <Link key={index} to={e.url}>
                      <Typography sx={{ mb: 1 }}>{e.name}</Typography>
                    </Link>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
      <hr />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography>
          <b>Copyright © All Rights Reserved</b>
        </Typography>
      </Box>
    </footer>
  );
};
