import { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { PlayArrow } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import {
  Box,
  Grid,
  Button,
  useTheme,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const MovieSlider = ({ arr }) => {
  const [applyClass, setApplyClass] = useState(0);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={isMatch ? 2 : 6}
      navigation
      autoplay
    >
      {arr &&
        arr.map((ele, inx) => {
          return (
            <SwiperSlide key={inx}>
              <Link to={`/player/${ele.id}`}>
                <Box
                  sx={{ p: 1 }}
                  position="relative"
                  onMouseEnter={() => setApplyClass(inx + 1)}
                  onMouseLeave={() => setApplyClass(0)}
                >
                  <img loading="lazy" src={ele.image} alt="Card" />
                  <img
                    className={
                      applyClass == inx + 1
                        ? style.show_play_btn
                        : style.hide_play_btn
                    }
                    src="/images/play-btn.png"
                    alt="Play Button"
                  />
                </Box>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export const TopCardSlider = ({ arr }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      slidesPerView={1}
      navigation={!isMatch}
      pagination
      autoplay
    >
      {arr &&
        arr.map((e, index) => {
          return (
            <SwiperSlide key={index}>
              <section
                className={style.top_sec}
                style={{ backgroundImage: `url(${e.image})` }}
              >
                <Container>
                  <Grid container>
                    <Grid item md={6}>
                      <Typography variant="h3">
                        <b>{e.name}</b>
                      </Typography>
                      <br />
                      <Typography>
                        <b>Hindi || Action, Drama, Spy</b>
                      </Typography>
                      <br />
                      <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus recusandae ipsa cupiditate quibusdam
                        corporis! Earum debitis accusantium architecto enim
                        asperiores ullam pariatur. Magni quaerat labore culpa
                        assumenda praesentium officia facere?
                      </Typography>
                      <br />
                      <br />
                      <Link to={`/player/${e.id}`}>
                        <Button variant="contained" color="error">
                          <PlayArrow />
                          &nbsp;&nbsp;&nbsp;
                          <b>Play Now</b>
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Container>
              </section>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
