import React from "react";
import { Link } from "react-router-dom";

function Skittles() {
    return (
        <div>
            <h1>Taste the Rainbow!</h1>
            <img
                src="https://images.unsplash.com/photo-1600359738432-965e50c4d89e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                alt="Rainbow Candy!!!!!"
            />
            <h2>Back to <Link to="/">Vending Machine</Link></h2>
        </div>
    );
}

export default Skittles;