import React from "react";
import "../../index.css";
import {CDN_URL} from "../utils/config.js";

const RestaurentCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating } = props.resData;
    return (
        <div className="rest-card">
            <div className="rest-img">
                <img src={ CDN_URL + cloudinaryImageId} alt={name} />
            </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>Rating : {avgRating}</p>
        </div>
    );
};

export default RestaurentCard;