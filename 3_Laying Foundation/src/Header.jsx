import React from "react";
import '../index.css';
import cheetah from './cheetah.png';
import Profile from './prof.png';



export const Header = () => {
  return (
    <div id="header">
      <div className="image">
        <img src={cheetah}/>
      </div>
      <div id="search-box">
       <input className="box" type="text" placeholder="search"></input>
      </div>
      <div id="button">
        <button>Search</button>
      </div>
      <div className="image">
        <img src={Profile}/>
      </div>
    </div>
  );
};
