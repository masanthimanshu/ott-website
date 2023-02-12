import "swiper/css/bundle";
import "./assets/style.css";

import { CheckAuth } from "./auth/CheckAuth";
import { LoginKeeper } from "./auth/LoginKeeper";
import { Routes, Route } from "react-router-dom";
import { Home, Shows, Kids, Movies, Music, News, Login, Player } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="news" element={<News />} />
      <Route path="kids" element={<Kids />} />
      <Route path="shows" element={<Shows />} />
      <Route path="music" element={<Music />} />
      <Route path="movies" element={<Movies />} />

      <Route element={<CheckAuth />}>
        <Route path="player/:videoId" element={<Player />} />
      </Route>

      <Route element={<LoginKeeper />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
