import React, { useState } from "react";

import "./navMenu.css";

const NavMenu = ({ changeTheStateOfSomething }) => {
  const [value, setValue] = useState(false);
  return (
    <div
      onClick={() => {
        changeTheStateOfSomething(value);
        setValue(!value);
      }}
      className="nav"
    >
      navMenu
    </div>
  );
};

export default NavMenu;
