import React from 'react';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import Header from '../Component/header';
import {actions} from "../store";

class Login extends React.Component{

    handleLogin = async() =>{
        
        await this.props.storeHandleLogin();
        // console.log("nilai user_credent", this.props.user_credential)
        this.props.history.push("/profile");
    }


    render() {
        // console.warn("cek props login", this.props);
        this.props.setAsNewsPage(false);
        return (
            <div className='login-body'>
                <Header  />
                <div className="container">
                <div className="article-body">
                    LoginPage
                    
                    <form onSubmit={e => e.preventDefault()}>
                        <input type="text" name="userName" placeholder="Username" />
                        <br/>
                        <input type="password" name="userPassword" placeholder="Password" />
                        <br/>
                        <input type="submit" value="Login" onClick={() => this.handleLogin()}></input>
                    </form>
                </div>
            </div>
            </div>            
        );
    }
}

export default connect("user_credential", actions)(withRouter(Login));


    

    

    