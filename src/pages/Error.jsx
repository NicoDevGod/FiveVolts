import React from "react";
import { Link } from "react-router-dom";

function Error(){
    return (
        <div>
            <h1>Error</h1>
            <Link to="/">volver..</Link>
        </div>
    )
}

export default Error;