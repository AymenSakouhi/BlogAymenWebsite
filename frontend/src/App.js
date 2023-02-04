import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createPortal } from "react-dom";

import NavMenu from "./Components/sharedComponents/NavMenu";
import WeirdComponent from "./Components/sharedComponents/WeirdComponent";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1>Hello world</h1>
      <NavMenu
        changeTheStateOfSomething={(val) => {
          setShowModal(!val);
        }}
      />
      {showModal &&
        createPortal(<WeirdComponent />, document.getElementById("modal"))}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
