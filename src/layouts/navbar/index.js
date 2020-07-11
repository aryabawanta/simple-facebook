import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/navbar.scss";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to="/">
                    <div className="navbar__logo">
                        <img
                            src="https://blog.sanbercode.com/wp-content/uploads/2019/01/untitled.png"
                            alt="logo"
                        />
                    </div>
                </NavLink>

                <div className="navbar__menu">
                    {/* <div className="navbar__menu__item">Home</div> */}
                </div>
            </div>
        );
    }
}
