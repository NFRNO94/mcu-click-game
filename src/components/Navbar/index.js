import React from "react";
//import Score from "../Score";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <a className="navbar-brand" href="/">MCU Clicky Game</a>
            {<div className="navbarText">
               {props.children}
            </div>}
        </nav>
    )
}

export default Navbar;
