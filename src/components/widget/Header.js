import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
import './Header.scss';

const Header = () => {
        return(
            /*<nav className="nav">
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <a className="navbar-brandnav" href="#"><img className="img" src="/img/logo1.png"></img></a>
            <div class="nav-links">
                <a className="nav-link" href="/" target="_blank">Home</a>
                <a className="nav-link" href="/myplaylist" target="_blank">My playlist</a>
               <a className="nav-link" href="https://codepen.io/jo_Geek/" target="_blank">Sign in</a>
            </div>
            </nav>*/
           
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top colornav">
               
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               <img className="img" src="/img/logo1.png"></img>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link " to="/myplaylist">My PlayList</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}

export default Header;
