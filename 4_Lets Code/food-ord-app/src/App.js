// App.js
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../index.css";
import Footer from "./components/Footer";

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
