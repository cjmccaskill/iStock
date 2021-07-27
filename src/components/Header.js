import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/home">
        <div>i<span>$</span>tocks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/dashboard">
        <div>Stocks</div>
      </Link>
    </div>
  );
};

export default Header;
