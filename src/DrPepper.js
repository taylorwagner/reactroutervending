import React from "react";
import { Link } from  "react-router-dom";

function DrPepper() {
    return (
        <div>
            <h1>23 FLAVORS!</h1>
            <img
                src="https://images.unsplash.com/photo-1597953707686-5165c00ff1f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt="Best soda created!"
            />
            <h2>Back to <Link to="/">Vending Machine</Link></h2>
        </div>
    );
}

export default DrPepper;