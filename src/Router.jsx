import { CheckAuth } from "./auth/CheckAuth";
import { LoginKeeper } from "./auth/LoginKeeper";
import { Routes, Route } from "react-router-dom";
import {
  FAQ,
  Home,
  Kids,
  News,
  About,
  Login,
  Music,
  Shows,
  Movies,
  Player,
  Contact,
  Profile,
} from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="news" element={<News />} />
      <Route path="kids" element={<Kids />} />
      <Route path="about" element={<About />} />
      <Route path="shows" element={<Shows />} />
      <Route path="music" element={<Music />} />
      <Route path="movies" element={<Movies />} />
      <Route path="contact" element={<Contact />} />

      <Route element={<CheckAuth />}>
        <Route path="profile" element={<Profile />} />
        <Route path="player/:videoId" element={<Player />} />
      </Route>

      <Route element={<LoginKeeper />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
