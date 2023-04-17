import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { ReadMore } from "../../service/ReadMore";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlayerData } from "../../middleware/player";
import {
  Box,
  useTheme,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const Player = () => {
  const { videoId } = useParams();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const [data, setData] = useState({});

  useEffect(() => {
    const res = PlayerData(videoId);
    setData(res);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [videoId]);

  return (
    <>
      <Container maxWidth="xl">
        <iframe
          loading="lazy"
          src={`https://www.youtube.com/embed/${data.player?.embedCode}`}
        ></iframe>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
        <Typography variant="h3">
          <b>{data.player?.name}</b>
        </Typography>
        <br />
        <br />
        <Typography>
          <b>Genre :</b> &nbsp; Action, Drama, Thriller
        </Typography>
        <br />
        <ReadMore>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          dolorum ullam fugit autem repellendus itaque, repellat rerum ipsum
          sequi dignissimos nisi officiis temporibus debitis minima fugiat
          pariatur natus sint vero et obcaecati recusandae vel. Voluptates
          voluptatem, a est maiores corporis aut voluptatibus amet tempora
          perferendis assumenda sequi quia dolores error sed facere dolorum quas
          consequatur molestias atque tempore numquam doloribus dolor!
          Asperiores, natus. Fuga provident eos, molestias enim, officiis autem
          quibusdam, praesentium fugit dolorem incidunt similique cupiditate
          nemo corporis. Consequuntur, illum doloribus. Deserunt debitis, facere
          aliquid ipsa praesentium eaque sint nesciunt voluptates! Enim voluptas
          adipisci corporis debitis eligendi nemo explicabo?
        </ReadMore>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Recommended Shows</Typography>
        <br />
        <Swiper
          modules={[Navigation]}
          slidesPerView={isMatch ? 2 : 6}
          navigation
        >
          {data.recommended &&
            data.recommended.map((e, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to={`/player/${e.id}`}>
                    <Box sx={{ p: 1 }}>
                      <img loading="lazy" src={e.image} alt="Card" />
                    </Box>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </>
  );
};
