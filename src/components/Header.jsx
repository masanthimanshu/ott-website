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
              <Link to="/">
                <Button variant="text">
                  <Typography color="white">
                    <b>Home</b>
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item md={2}>
              <Link to="/shows">
                <Button variant="text">
                  <Typography color="white">
                    <b>Shows</b>
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item md={2}>
              <Link to="/movies">
                <Button variant="text">
                  <Typography color="white">
                    <b>Movies</b>
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item md={2}>
              <Link to="/news">
                <Button variant="text">
                  <Typography color="white">
                    <b>News</b>
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item md={2}>
              <Link to="/kids">
                <Button variant="text">
                  <Typography color="white">
                    <b>Kids</b>
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item md={2}>
              <Link to="/music">
                <Button variant="text">
                  <Typography color="white">
                    <b>Music</b>
                  </Typography>
                </Button>
              </Link>
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
