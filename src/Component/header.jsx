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
                                        <a href="" className="active-page">NEWS</a>
                                    </li>
                                    <li>
                                        <a href="">SPORT</a>
                                    </li>
                                    <li>
                                        <a href="">HEALTH</a>
                                    </li>
                                    <li>
                                        <a href="">POLITIC</a>
                                    </li>
                                    <li>
                                        <a href="">LOGIN</a>
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