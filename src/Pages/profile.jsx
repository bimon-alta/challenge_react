import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import PageTitle from '../Component/page-title';
import { Redirect } from "react-router-dom";

const Profile = props => {
    const email = localStorage.getItem("email");
    const userName = localStorage.getItem("name");
    // const is_login = localStorage.getItem("is_login");
    const is_login = JSON.parse(localStorage.getItem("is_login"));

    if (is_login === null) {
        return <Redirect to={{ pathname: "/login" }} />;
    } else {
        return (
            <div className='about-body'>
                <Header />
                <PageTitle pageTitle="PROFILE"/>
                <div classNameName="container">          
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-me-content">
                                <ul>
                                    <li>
                                        
                                        <div className="header">
                                            User Name
                                        </div>
                                        <div className="detail">
                                            {userName}
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div className="header">
                                            Email Address
                                        </div>
                                        <div className="detail">
                                            {email}
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

export default Profile;


    

    

    