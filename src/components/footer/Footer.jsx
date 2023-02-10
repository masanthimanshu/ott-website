import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Grid, Container, Box, Typography, IconButton } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Container sx={{ mb: 5 }}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              laudantium quae, corporis laboriosam alias, voluptatibus tempora
              non nam, corrupti veritatis magni repudiandae nemo tenetur
              possimus eius dolorum omnis impedit sed?
            </Typography>
            <br />
            <br />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Follow us on :</Typography>
              &nbsp; &nbsp;
              <IconButton onClick={() => alert("Clicked")} color="error">
                <Facebook />
              </IconButton>
              &nbsp; &nbsp;
              <IconButton onClick={() => alert("Clicked")} color="error">
                <Instagram />
              </IconButton>
              &nbsp; &nbsp;
              <IconButton onClick={() => alert("Clicked")} color="error">
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
              <Link to="#">
                <Typography sx={{ mb: 1 }}>About Us</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ mb: 1 }}>Contact Us</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ mb: 1 }}>FAQ</Typography>
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
              <Link to="#">
                <Typography sx={{ mb: 1 }}>Home</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ mb: 1 }}>Shows</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ mb: 1 }}>Movies</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ mb: 1 }}>News</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ mb: 1 }}>Kids</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ mb: 1 }}>Music</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography>
          <b>Copyright © All Rights Reserved</b>
        </Typography>
      </Box>
    </>
  );
};
