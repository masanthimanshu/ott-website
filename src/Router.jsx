import "./style.css";
import "swiper/css/bundle";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
