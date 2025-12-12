import React, { useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    // Get the container element
    const container = document.getElementById("application-container");

    if (container) {
      const paragraph = document.createElement("p");
      paragraph.textContent = "🐸";
      container.appendChild(paragraph);
    }
  }, []);
  return null;
};

export default App;
