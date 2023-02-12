import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import data from "../../data/ImageData.json";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Typography } from "@mui/material";

export const Player = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <video width="100%" poster="/images/poster3.png" controls>
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h3">
          <b>Movie Name</b>
        </Typography>
        <br />
        <br />
        <Typography>
          <b>Genre :</b> &nbsp; Action, Drama, Thriller
        </Typography>
        <br />
        <Typography>
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
        </Typography>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Recommended Shows</Typography>
        <br />
        <Swiper modules={[Navigation]} slidesPerView={5} navigation>
          {data.cards.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to="#">
                  <Box sx={{ p: 1 }}>
                    <img src={e} alt="Card" />
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
