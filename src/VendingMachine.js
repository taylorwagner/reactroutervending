import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1>WHAT ARE YOU FEELING LIKE TODAY???</h1>
            <img
                src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="Choose your treat!"
            />
            <h2><Link to="/soda">Dr. Pepper</Link></h2>
            <h2><Link to="/chocolate">Milky Way</Link></h2>
            <h2><Link to="/sweets">Skittles</Link></h2>
        </div>
    );
}

export default VendingMachine;