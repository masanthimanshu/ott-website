import "swiper/css/bundle";
import "./assets/style.css";

import { Routes, Route } from "react-router-dom";
import { Home, Shows, Kids, Movies, Music, News, Login } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/music" element={<Music />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};
