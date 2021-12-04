import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <Link to="/" className="navbar-brand ml-5">
        Redux Contact App
      </Link>
    </nav>
  );
};

export default Navbar;
