import React from 'react';
import SearchBox from './search-box';
import '../css/header.css';

class Header extends React.Component{
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <a href="" className="header-logo">
                                <img src={require("../img/logo-ALTA.png")} />
                            </a>
                        </div>
                        <div className="col-md-8">
                            <div className="header-nav">
                                <ul className="header-nav__list list-unstyled">  
                                    <li>
                                        <SearchBox />
                                    </li>
                                    <li> 
                                        <a href="index.html" className="active-page">HOME</a>
                                    </li>
                                    <li>
                                        <a href="about.html">ABOUT</a>
                                    </li>
                                    <li>
                                        <a href="news.html">NEWS</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;