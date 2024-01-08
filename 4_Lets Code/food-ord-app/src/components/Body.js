import React from "react";
import RestaurentCard from "./RestaurentCard";
import "../../index.css";
import { resList } from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    const [listOfRes, setlistOfRes] = useState(Array.isArray(resList) ? resList : []);
    const [searchInput, setsearchInput] = useState("");

    return (
        <div className="body">
            <div className="filter">
                <button
                    type="button"
                    onClick={() => {
                        const filteredList = listOfRes.filter((res) => res.avgRating > 4);
                        setlistOfRes(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <div className="search-box">
                    <input type="text" placeholder="Search for food and restraurents"
                        onChange={(e) => {
                            setsearchInput(e.target.value)
                        }}
                    ></input>
                    <button type="button" className="search-btn" onClick={() => {
                        const filteredRes = resList.filter((res) => {
                            return res.name.toLowerCase().includes(searchInput.toLowerCase());
                        });
                        setlistOfRes(filteredRes);
                    }}>Search</button>

                </div>
            </div>
            <div className="rest-container">
                {
                    listOfRes.map((restraurent) => {
                        return <RestaurentCard key={restraurent.id} resData={restraurent} />
                    })
                }
            </div>
        </div>
    );
}
export default Body;