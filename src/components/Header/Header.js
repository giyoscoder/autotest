import React from "react";
import classes from "./Header.module.css";
import {logo} from '../../Assets';

const Header = () => {
  return (
    <div className={classes.header}>
        <img src={logo} alt="Logo" />
        <p>Welcome To Test !</p>
    </div>
  );
};

export default Header;
