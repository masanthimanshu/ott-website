import { useEffect } from "react";
import { UpdateContext } from "./Context";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CheckAuth } from "./auth/CheckAuth";
import { LoginKeeper } from "./auth/LoginKeeper";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  About,
  Login,
  Player,
  SignUp,
  Contact,
  Profile,
  Category,
  NotFound,
  Settings,
} from "./pages";

export const Router = () => {
  const update = UpdateContext();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn === "true") {
      update.UpdateAuth();
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Navigate to="category/home" replace />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="category/:name" element={<Category />} />

        <Route element={<CheckAuth />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="player/:videoId" element={<Player />} />
        </Route>

        <Route element={<LoginKeeper />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
