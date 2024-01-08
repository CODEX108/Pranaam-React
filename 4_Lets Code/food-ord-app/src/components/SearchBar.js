import React, { useState } from "react";
import "../../index.css";
import { resList } from "../utils/mockData";

function SearchBar(props) {
  const [searchInput,setsearchInput] = useState("");


  return (
    <div className="search-box">
        <input type="text" placeholder="Search for food and restraurents"
        onChange={(e)=>setsearchInput(e.target.value)}
        ></input>
        <button type="button" className="search-btn" onClick={()=>{
          const filteredRes =  props.filter((res)=>{
            res.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) || res.cuisines.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
          })
        }}>Search</button>
    </div>
  )
}

export default SearchBar