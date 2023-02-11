import React from "react";
import "./HomePage.module.css"

const HomePage = () => {
    return ( 
        <div className="homemainDiv">
            <div>
                <div>
                    <img src="data:image/png;base64,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" alt="" />
                    <p>Main Street, uni 21, New York City</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-icon/telephone-symbol-button_318-41893.jpg" alt="" />
                    <p>+38(012)3456789</p>
                </div>
                <div>contact us</div>
            </div>
           <img src="https://makanmate.com/wp-content/uploads/slider12/table-top.jpg" alt="" />
           <div className="homenavDiv">
            <p>Home</p>
            {/* <p>Menu</p> */}
            <div className="dropdown">
                <p className="dropbtn">Menu</p>
                <div className="dropdown-content">   
                    <a href="#">Boxed layout</a>
                </div>
            </div>
            <p>About</p>
            <p>PANSEAS SEAFOOD</p>
            <p>Event</p>
            <p>Contact US</p>
           </div>
           <p className="nameImg">Cristiano Restaurant <br />
             123 Main Street, Uni 21, New York City
           </p>
        </div>
     );
}
 
export default HomePage;