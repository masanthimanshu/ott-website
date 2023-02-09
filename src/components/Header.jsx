import { Container, Box, Grid, Button, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Container sx={{ pt: 2, pb: 2 }}>
      <Grid container>
        <Grid item md={3}>
          <img style={{ height: "2.5rem" }} src="/images/logo.png" alt="Logo" />
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={4}>
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
        <Grid item md={3}>
          <Box sx={{ textAlign: "right" }}>
            <Button variant="contained" color="error">
              <b>Login</b>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
