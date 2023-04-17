import { ReadContext } from "../Context";
import { Outlet, Navigate } from "react-router-dom";

export const LoginKeeper = () => {
  const { auth } = ReadContext();

  return auth ? <Navigate to="/" replace /> : <Outlet />;
};
