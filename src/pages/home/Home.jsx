import style from "./style.module.css";
import { PlayArrow } from "@mui/icons-material";
import { Header } from "../../components/Header";
import { Typography, Button, Container, Grid } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Header />
      <section className={style.top_sec}>
        <div className={style.left}>
          <Container>
            <Typography variant="h2">
              <b>PATHAAN</b>
            </Typography>
            <br />
            <Typography>
              <b>Hindi || Action, Drama, Spy</b>
            </Typography>
            <br />
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus recusandae ipsa cupiditate quibusdam corporis! Earum
              debitis accusantium architecto enim asperiores ullam pariatur.
              Magni quaerat labore culpa assumenda praesentium officia facere?
            </Typography>
            <br />
            <br />
            <Button variant="contained" color="error">
              <PlayArrow /> &nbsp;&nbsp;
              <b>Play Now</b>
            </Button>
            <br />
            <br />
            <br />
            <br />
          </Container>
        </div>
        <div className={style.right}></div>
      </section>
      <br />
      <br />
      <Container>
        <Typography variant="h5">Latest Movies</Typography>
        <br />
        <Grid container spacing={2}>
          <Grid item md={2}>
            <div class={`${style.item} ${style.img_1}`}></div>
          </Grid>
          <Grid item md={2}>
            <div class={`${style.item} ${style.img_2}`}></div>
          </Grid>
          <Grid item md={2}>
            <div class={`${style.item} ${style.img_3}`}></div>
          </Grid>
          <Grid item md={2}>
            <div class={`${style.item} ${style.img_4}`}></div>
          </Grid>
          <Grid item md={2}>
            <div class={`${style.item} ${style.img_5}`}></div>
          </Grid>
          <Grid item md={2}>
            <div class={`${style.item} ${style.img_1}`}></div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
