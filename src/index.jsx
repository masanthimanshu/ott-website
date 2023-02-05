import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Router } from "./Router";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
