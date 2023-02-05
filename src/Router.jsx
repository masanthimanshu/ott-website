import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./style.css";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
