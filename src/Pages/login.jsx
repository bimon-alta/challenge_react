import React from 'react';
import axios from "axios";

import Header from '../Component/header';




class Login extends React.Component{
    state = { userName: "", userPassword: "" };

    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = () => {
        const self = this;
        
        const { userName, userPassword } = this.state;
        const data = {
          username: userName,
          password: userPassword
        };
        axios
        .post("https://bimon.free.beeceptor.com/auth", data)
        .then(function (response) {
            console.log(response.data);
            if (response.data.hasOwnProperty("api-key")) {
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("api-key", response.data.api_key);
                localStorage.setItem("is_login", true);
                
                self.props.history.push("/profile");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };


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


    

    

    