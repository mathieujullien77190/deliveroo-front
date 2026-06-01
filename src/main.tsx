import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ResetStyle } from "./ResetStyle.ts";
import { GlobalStyle } from "./GlobalStyle.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
);
