import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

const Header = () => {

  const [btnName, setBtnName] = useState("login");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <div className="btn">
            <button className="login-btn"
             onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
             }}
            >
             {btnName}
            </button>
            </div>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
