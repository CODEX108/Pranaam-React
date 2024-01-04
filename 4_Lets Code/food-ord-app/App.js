// App.js
import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">🍴
                {/* <img src={logo} alt="logo" /> */}
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


const resList = [
    {
        "id": "443511",
        "name": "EatFit",
        "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
        "locality": "CST Road",
        "areaName": "Santacruz East",
        "costForTwo": "₹270 for two",
        "cuisines": [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani"
        ],
        "avgRating": 4.3,
        "parentId": "76139",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+"
    },
    {
        "id": "351884",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "gaeps6e8p8rhoc4hengo",
        "locality": "Scruz Bandra East",
        "areaName": "Juhu",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.6",
        "totalRatingsString": "100+",
    },
    {
        "id": "186123",
        "name": "The Biryani Life",
        "cloudinaryImageId": "wrohceoglapcgvingtqe",
        "locality": "Kalina",
        "areaName": "Santacruz East",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "North Indian",
            "Kebabs",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 3.9,
        "parentId": "8496",
        "avgRatingString": "3.9",
        "totalRatingsString": "500+",
    },
    {
        "id": "28721",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
        "locality": "Kalina",
        "areaName": "Santacruz East",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "3534",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
    },
    {
        "id": "156134",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "BKC FC",
        "areaName": "Santacruz East",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Biryani",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "7918",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
    },
    {
        "id": "28405",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "CST Road",
        "areaName": "Santacruz East",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "61955",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
    },
    {
        "id": "580425",
        "name": "Mad Over Donuts",
        "cloudinaryImageId": "524b746adaa25814f5d4f16745cbbc6b",
        "locality": "Swastik Industrial Estate",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Desserts"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "611",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
    },
    {
        "name": "Tejal's Kitchen",
        "cloudinaryImageId": "gp7q0zffgrjqyqdcx3wn",
        "locality": "Next to Raj Auto Garage,Yashwant Nagar, Kalina",
        "areaName": "Santacruz East",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Gujarati",
            "Rajasthani",
            "Jain"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "11426",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
    }
];


const RestaurentCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating } = props.resData;
    return (
        <div className="rest-card">
            <div className="rest-img">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name} />
            </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>Rating : {avgRating}</p>
        </div>
    );
};




const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">search</div>
            <div className="rest-container">
                {
                    resList.map((restraurent) => {
                      return  <RestaurentCard key={resList.id} resData={restraurent} />
                    })
                }
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-items">
                About Us
            </div>
            <div className="footer-items">
                Contact Us
            </div>
        </div>
    )
};
const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
