import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const NavButton = (props) => {

    return (
        <Router>
            <button>
                <Link to={props.name}>{props.name}</Link>
            </button>  
        </Router>
            
    );
};

export default NavButton;