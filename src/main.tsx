import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactGA from "react-ga4";
import { BrowserRouter } from "react-router-dom";

ReactGA.initialize("G-2ZGLL9YHZ7");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
