import React from "react";
import HomePage from "./HomePage";
import "./Navbar.module.css"

const Navbar = () => {

    return ( 
        <div>
            <div className="navDiv">
                <div className="subnavDiv">
                    <img src="https://makanmate.com/wp-content/uploads/2022/09/logo.png" alt="" />
                    <button>Order Now</button>
                </div>
            </div>
             <HomePage />
        </div>
     );
}
 
export default Navbar;