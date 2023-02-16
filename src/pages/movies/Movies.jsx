import { Link } from "react-router-dom";
import data from "../../data/ImageData.json";
import { Navigation, Autoplay } from "swiper";
import { PlayArrow } from "@mui/icons-material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import style from "../../assets/style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

export const Movies = () => {
  return (
    <>
      <Header />
      <section
        className={style.top_sec}
        style={{ backgroundImage: `url(${data.movies.image})` }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={6}>
              <Box sx={{ mt: 5 }}>
                <Typography variant="h2">
                  <b>{data.movies.name}</b>
                </Typography>
                <br />
                <Typography>
                  <b>Hindi || Action, Drama, War</b>
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus recusandae ipsa cupiditate quibusdam corporis!
                  Earum debitis accusantium architecto enim asperiores ullam
                  pariatur. Magni quaerat labore culpa assumenda praesentium
                  officia facere?
                </Typography>
                <br />
                <br />
                <Link to={`/player/${data.movies.id}`}>
                  <Button variant="contained" color="error">
                    <PlayArrow />
                    &nbsp;&nbsp;&nbsp;
                    <b>Play Now</b>
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Featured Shows</Typography>
        <br />
        <Grid container spacing={1}>
          {data.featured.map((e, index) => {
            return (
              <Grid key={index} item md={2}>
                <Link to={`/player/${e.id}`}>
                  <div className={style.item}>
                    <img src={e.image} alt="Card" />
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Latest Movies</Typography>
        <br />
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={5}
          navigation
          autoplay
        >
          {data.cards.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`/player/${e.id}`}>
                  <Box sx={{ p: 1 }}>
                    <img src={e.image} alt="Card" />
                  </Box>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Top Web Series</Typography>
        <br />
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={5}
          navigation
          autoplay
        >
          {data.cards.reverse().map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`/player/${e.id}`}>
                  <Box sx={{ p: 1 }}>
                    <img src={e.image} alt="Card" />
                  </Box>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
      <Footer />
    </>
  );
};
