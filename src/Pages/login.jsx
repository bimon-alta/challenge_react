import React from 'react';
import axios from "axios";

import Header from '../Component/header';




class Login extends React.Component{

    

    


    render() {
        return (
            <div className='login-body'>
                <Header  />
                <div className="container">
                <div className="article-body">
                    LoginPage
                    
                    <form onSubmit={e => e.preventDefault()}>
                        <input type="text" name="userName" placeholder="Username" onChange={e => this.changeInput(e)}/>
                        <br/>
                        <input type="password" name="userPassword" placeholder="Password" onChange={e => this.changeInput(e)}/>
                        <br/>
                        <input type="submit" value="Login" onClick={() => this.handleLogin()}></input>
                    </form>
                </div>
            </div>
            </div>            
        );
    }
}

export default Login;


    

    

    