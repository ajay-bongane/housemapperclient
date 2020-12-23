import React from "react";
import {Link} from 'react-router-dom';
import logo from '../../resources/chart.gif';

function Header() {
    return(
        <header>
            <img src={logo} id="logo" alt="logo"/>
			<h1><Link to ="/home">Skillsoft Weight Tracker</Link></h1>
            <nav>
                <ul>
                    <li><Link to ="/home">home</Link></li>
                    <li><Link to ="/enterweight">enter weight</Link></li>
                    <li><Link to ="/myweights">my weights</Link></li>
                    <li><Link to ="/teamweights">team weights</Link></li>
                    <li><Link to ="/search">search</Link></li>
                    <li><Link to ="/login">login</Link></li>
                </ul>
		    </nav>
        </header>
    );
};

export default Header;