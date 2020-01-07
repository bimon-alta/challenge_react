import React from 'react';
import SearchBox from './search-box';
import '../css/header.css';

import {Link} from 'react-router-dom';

class Header extends React.Component{
    
    handleRouterNav = categoryName => {
        const category = categoryName;
        this.props.history.replace("/news-category/" + category);
    };

    doLogout = () => {
        // console.log("masuk DI SINI BOSS")

        // localStorage.removeItem("is_login");
        localStorage.clear();
        
        // return <Redirect to={{ pathname: "/" }} />;
        // localStorage.clear();
        // this.props.history.push("/");
    };

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <a href="" className="header-logo">
                                <img src={require("../img/logo-ALTA.png")} />
                            </a>
                        </div>
                        <div className="col-md-2">
                            <div className="header-nav">
                                <ul className="list-category list-unstyled">
                                    <li value="health"
                                        onClick={this.props.isCategoryNews !== undefined ? () => this.props.handleRouter("health") : () => this.handleRouterNav("health")}
                                    >Health
                                    </li>
                                    <li value="technology"
                                        onClick={this.props.isCategoryNews !== undefined ? () => this.props.handleRouter("technology") : () => this.handleRouterNav("technology")}
                                    >Techno</li>
                                   
                                </ul>    
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="header-nav">
                                <ul className="header-nav__list list-unstyled">  
                                    <li>
                                        <SearchBox {...this.props}/>
                                    </li>
                                    <li> 
                                        <Link to="/">HOME</Link>
                                    </li>
                                    <li>
                                        <Link to="/home">PAGE</Link>
                                    </li>
                                    <li>
                                        <Link to="/experience">EXP</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile">PROFILE</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">LOGIN</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={this.doLogout}>LOGOUT</Link>
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