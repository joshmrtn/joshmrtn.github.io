import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("application-container");
if (rootElement) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App></App>
    </StrictMode>
  );
} else {
  console.error("Root element not found!");
}
