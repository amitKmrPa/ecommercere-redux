import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import {BrowserRouter as Route, useNavigate} from "react-router-dom";

let NavBar = () => {

    return <React.Fragment>

        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                            <Link to={'/'} className="nav-link"  >Home Page</Link>&nbsp; &nbsp; &nbsp;
            </div>
        </nav>

    </React.Fragment>
}

export default NavBar;