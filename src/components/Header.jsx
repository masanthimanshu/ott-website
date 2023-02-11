import { Link } from "react-router-dom";
import { Container, Box, Grid, Button, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 2 }}>
      <Grid container>
        <Grid item md={2}>
          <Link to="/">
            <img
              style={{ height: "2.5rem", width: "auto" }}
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={4} sx={{ pt: 0.5, textAlign: "right" }}>
            <Grid item md={2}>
              <Button variant="text">
                <Link to="/">
                  <Typography color="white">
                    <b>Home</b>
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Link to="/shows">
                  <Typography color="white">
                    <b>Shows</b>
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Link to="/movies">
                  <Typography color="white">
                    <b>Movies</b>
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Link to="/news">
                  <Typography color="white">
                    <b>News</b>
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Link to="/kids">
                  <Typography color="white">
                    <b>Kids</b>
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Link to="/music">
                  <Typography color="white">
                    <b>Music</b>
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Box textAlign="right">
            <Link to="/login">
              <Button variant="contained" color="error">
                <b>Login</b>
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
