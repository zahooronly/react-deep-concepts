import { Link } from "react-router";
import { ThemeButton } from "../context/ThemeButton";

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
      </ul>
      <ThemeButton />
    </nav>
  );
};
