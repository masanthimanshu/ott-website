import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import data from "../../data/ImageData.json";
import playerData from "../../data/allData.json";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Typography } from "@mui/material";

export const Player = () => {
  const { videoId } = useParams();
  const [obj, setObj] = useState({});

  const getData = () => {
    playerData.filter((e) => e.id === videoId).map((e) => setObj(e));
  };

  useEffect(() => {
    getData();

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ m: 4, textAlign: "center" }}>
        <iframe
          src={`https://www.youtube.com/embed/${obj.embedCode}`}
          title="YouTube video player"
          frameborder="0"
        ></iframe>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h3">
          <b>{obj.name}</b>
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
                <a href={`/player/${e.id}`}>
                  <Box sx={{ p: 1 }}>
                    <img src={e.image} alt="Card" />
                  </Box>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
      <Footer />
    </>
  );
};
