import React from "react";
import { Link } from "react-router-dom";

function MilkyWay() {
    return (
        <div>
            <h1>My Favorite!</h1>
            <img
                src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="MILKY WAY CANDY BAR!"
            />
            <h2>Back to <Link to="/">Vending Machine</Link></h2>
        </div>
    );
}

export default MilkyWay;