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
          <Grid container spacing={4} textAlign="right">
            <Grid item md={2}>
              <Button variant="text">
                <Typography color="white">
                  <b>Home</b>
                </Typography>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Typography color="white">
                  <b>Shows</b>
                </Typography>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Typography color="white">
                  <b>Movies</b>
                </Typography>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Typography color="white">
                  <b>News</b>
                </Typography>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Typography color="white">
                  <b>Kids</b>
                </Typography>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button variant="text">
                <Typography color="white">
                  <b>Music</b>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Box textAlign="right">
            <Button variant="contained" color="error">
              <b>Login</b>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
