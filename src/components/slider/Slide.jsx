import { SwiperSlide } from "swiper/react";

export const Slide = ({ url }) => {
  return (
    <SwiperSlide>
      <Box sx={{ p: 1 }}>
        <img src={url} alt="Card" />
      </Box>
    </SwiperSlide>
  );
};
