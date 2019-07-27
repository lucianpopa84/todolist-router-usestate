import React from "react";
import { ALL, DONE, TODO } from "../filters";
import { NavLink } from "react-router-dom";

function Filter({ setActiveFilter }) {

  return (
    <div className="todoFilter">
    <NavLink to="/all" onClick={() => {setActiveFilter(ALL)}}>
      {ALL}
    </NavLink>
    |
    <NavLink to="/done" onClick={() => {setActiveFilter(DONE)}}>
      {DONE}
    </NavLink>
    |
    <NavLink to="/todo" onClick={() => {setActiveFilter(TODO)}}>
      {TODO}
    </NavLink>
  </div>
  );
}

export default Filter;
