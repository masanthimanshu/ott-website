import { Navigation } from "swiper";
import style from "./style.module.css";
import { PlayArrow } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

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
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Featured Shows</Typography>
        <br />
        <Grid container spacing={1}>
          <Grid item md={2}>
            <div className={style.item}>
              <img src="/images/movie-banner1.png" alt="Card" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div className={style.item}>
              <img src="/images/movie-banner2.png" alt="Card" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div className={style.item}>
              <img src="/images/movie-banner3.png" alt="Card" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div className={style.item}>
              <img src="/images/movie-banner4.png" alt="Card" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div className={style.item}>
              <img src="/images/movie-banner5.png" alt="Card" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div className={style.item}>
              <img src="/images/movie-banner6.png" alt="Card" />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Latest Movies</Typography>
        <br />
        <Swiper modules={[Navigation]} slidesPerView={5} navigation>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner1.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner2.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner3.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner4.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner5.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner6.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner1.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner2.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner3.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner4.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner5.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner6.png" alt="Card" />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Top Web Series</Typography>
        <br />
        <Swiper modules={[Navigation]} slidesPerView={5} navigation>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner1.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner2.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner3.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner4.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner5.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner6.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner1.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner2.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner3.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner4.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner5.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner6.png" alt="Card" />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Trending Shows</Typography>
        <br />
        <Swiper modules={[Navigation]} slidesPerView={5} navigation>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner1.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner2.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner3.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner4.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner5.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner6.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner1.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner2.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner3.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner4.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner5.png" alt="Card" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 1 }}>
              <img src="/images/movie-banner6.png" alt="Card" />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Footer />
    </>
  );
};
