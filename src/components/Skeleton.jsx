import { Skeleton, Container, Grid } from "@mui/material";

export const UISkeleton = () => {
  return (
    <Container maxWidth="xl">
      <Skeleton variant="rounded" height="20rem" sx={{ bgcolor: "grey" }} />
      <br />
      <br />
      <Grid container spacing={1}>
        {[...Array(10)].map((e, index) => (
          <Grid item sm={2} key={index}>
            <Skeleton
              sx={{ bgcolor: "grey" }}
              variant="rounded"
              height="20rem"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
