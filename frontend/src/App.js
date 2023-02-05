import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/pages/main/HomePage";

import "./style.css";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
