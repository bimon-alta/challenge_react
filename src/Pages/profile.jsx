import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import PageTitle from '../Component/page-title';
import { Redirect } from "react-router-dom";


import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions } from "../store";



const Profile = props => {
    // {console.log("nilai obj user credential", props.user_credential)}
    props.setAsNewsPage(false);

    if (props.user_credential.is_login != true) {
        return <Redirect to={{ pathname: "/login" }} />;
    } else {
        return (
            <div className='about-body'>
                <Header />
                <PageTitle pageTitle="PROFILE"/>
                <div className="container">          
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-me-content">
                                <ul>
                                    <li>
                                        
                                        <div className="header">
                                            User Name
                                        </div>
                                        <div className="detail">
                                            {props.user_credential.user_name}
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div className="header">
                                            Email Address
                                        </div>
                                        <div className="detail">
                                            {props.user_credential.email}
                                        </div>                            
                                    </li>                            
                                </ul>
                            </div>                
                        </div>    
                        <div className="col-md-6">
                            <div className="img-container">
                                <div className="foto1">
                                    <img src={require("../img/foto-about.jpg")} />
                                    
                                </div>
                                <div className="fotodot">
                                    <img src={require("../img/img-dot.png")} />    
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>                  
                <Footer />
            </div>            
        );
    }
}

export default connect("user_credential", actions)(withRouter(Profile));



    

    

    