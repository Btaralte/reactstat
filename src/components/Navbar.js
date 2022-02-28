import React from "react";
import classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul>
                <li>Reactstat</li>
            </ul>
        </nav>
    );
}
export default Navbar;