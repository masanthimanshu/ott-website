import { ReadContext } from "../Context";
import { Outlet, Navigate } from "react-router-dom";

export const CheckAuth = () => {
  const { auth } = ReadContext();

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};
