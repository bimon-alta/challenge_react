import React from 'react';
import SearchBox from './search-box';
import '../css/header.css';

import {Link, withRouter} from 'react-router-dom';
import { connect } from "unistore/react";

import { actions } from "../store";
class Header extends React.Component{
    
    handleRouterNav = categoryName => {
        this.props.history.replace("/news-category/" + categoryName);
    };

    

    render() {
        if (this.props.isOnNewsPage){
            if (this.props.user_credential.is_login){
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
                                                onClick={this.props.isCategoryNews !== undefined ? () => this.props.handleRouterCategoryNews("health") : () => this.handleRouterNav("health")}
                                            >Health
                                            </li>
                                            <li value="technology"
                                                onClick={this.props.isCategoryNews !== undefined ? () => this.props.handleRouterCategoryNews("technology") : () => this.handleRouterNav("technology")}
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
                                                <Link to="/" onClick={this.props.storeHandleLogout}>LOGOUT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                );
            }else{
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
                                                onClick={this.props.isCategoryNews !== undefined ? () => this.props.handleRouterCategoryNews("health") : () => this.handleRouterNav("health")}
                                            >Health
                                            </li>
                                            <li value="technology"
                                                onClick={this.props.isCategoryNews !== undefined ? () => this.props.handleRouterCategoryNews("technology") : () => this.handleRouterNav("technology")}
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                );    
            }

        }else{
            if(this.props.user_credential.is_login){
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
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="header-nav">
                                        <ul className="header-nav__list list-unstyled">  
                                            
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
                                                <Link to="/" onClick={this.props.storeHandleLogout}>LOGOUT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                );
            }else{
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
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="header-nav">
                                        <ul className="header-nav__list list-unstyled">  
                                            
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
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                );
            }

        }
    }
}

// export default Header;
export default connect("isOnNewsPage, user_credential", actions)(withRouter(Header));
