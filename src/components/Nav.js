import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ setGreased, greased }) => {
  return (
    <div className="ui form">
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
      </div>
      <button className="ui button" onClick={() => setGreased(!greased)}>
        {" "}
        {greased ? "Clear Filter" : "Filter by greased"}
      </button>
      <br />
      <br />
      
		  
		  <div class="ui dropdown">
        <input type="hidden" name="gender" />
        <i class="dropdown icon"></i>
        <div class="default text">Gender</div>
        <div class="menu">
          <div class="item" data-value="male">
            Male
          </div>
          <div class="item" data-value="female">
            Female
          </div>
        </div>
      </div>
	  <br />
      <br />
      
	  </div>
	  
    //   </div>
  );
};

export default Nav;
