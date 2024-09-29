import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/words">Quiz</NavLink>
      </nav>
    </header>
  );
};
