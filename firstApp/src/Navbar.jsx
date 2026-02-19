import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/">
            {" "}
            <li> Home</li>
          </NavLink>
          <NavLink to="/about">
            {" "}
            <li> About</li>
          </NavLink>
          <NavLink to="/service">
            {" "}
            <li> Service</li>
          </NavLink>
          <NavLink to="/help">
            {" "}
            <li> Help</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
