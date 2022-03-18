import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.style.scss";

const Nav = () => {
  const nav = [
    {
      to: "/",
      name: "home",
    },
    {
      to: "/universities",
      name: "universities",
    },
    {
      to: "/postal",
      name: "postal lookup",
    },
  ];
  return (
    <div className="nav col-1">
      {nav.map((el) => (
        <NavLink
          key={el.to}
          className="link"
          to={el.to}
          style={({ isActive }) => {
            return {
              fontWeight: isActive? "bolder":"",
              textShadow: isActive? "0px -4px 4px rgba(0, 0, 0, 0.25)":"",
            };
          }}
        >
          {el.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
