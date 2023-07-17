import React from "react";
import logo from "../assets/images/nav-logo.png";

function Navbar() {
    return (
        <nav>
            <img src={logo} />
            <p className="navbar">My Travel Journal</p>
        </nav>
    )
}

export default Navbar