import React from "react";
import ReactDOM from "react-dom";
import logo from "./images/logo.png";
import biryani from "./images/biryani.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestuarentCard = (props) => {
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={biryani} />
      <h3>{props.resName}</h3>
      <h4> {props.ratings}</h4>
      <h5> {props.cuisine}</h5>
      <h5> 30 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestuarentCard 
        resName="Donne Mane" 
        ratings= "4.3starts"
        cuisine="Donne , Hyderbadi , dum biryani"/>
        <RestuarentCard
         resName="KFC" 
         ratings= "4.1starts"
         cuisine="burger , chicken wings" />
         <RestuarentCard
         resName="Karavali" 
         ratings= "4.3starts"
         cuisine="fish fry , fish utta" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
