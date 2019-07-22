import React from "react";
import { ALL, DONE, TODO } from "../filters";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function Filter({ setActiveFilter }) {
  function todosToDisplay({ match }) {
    let todoDisplay = setActiveFilter(match.params.filter.toUpperCase());
    return todoDisplay;
  }
  return (
    <Router>
      <div className="todoFilter">
        <NavLink exact onClick={e => setActiveFilter(ALL)} to="/">
          {ALL}
        </NavLink>
        |
        <NavLink onClick={e => setActiveFilter(DONE)} to="/done">
          {DONE}
        </NavLink>
        |
        <NavLink onClick={e => setActiveFilter(TODO)} to="/todo">
          {TODO}
        </NavLink>
        <Route exact path={`/:filter`} render={todosToDisplay} />
      </div>
    </Router>
  );
}

export default Filter;
