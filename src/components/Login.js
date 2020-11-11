import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    submitUser = (event) => {
        event.preventDefault();
        
       let postData = {
            username: this.inputName.value,
            password: this.inputPassword.value
        };
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const axios = require('axios').default;
        
        axios.post(
                'http://<host>:(<port>)/<path>', 
                postData, 
                axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })

       
        console.log(this.inputName.value,  this.inputPassword.value);
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitUser} id="form" className="form">
                    <h2>Login</h2>
                    <div className="form-control">
                        <label htmlFor="username">Nazwa Użytkownika</label>
                        <input ref={input => this.inputName = input} type="text" id="username" placeholder="Podaj nazwę użytkownika" />
                        <small>{this.state.nameError}</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Hasło</label>
                        <input ref={input => this.inputPassword = input} type="password" id="password" placeholder="Podaj hasło" />
                        <small>{this.state.passwordError}</small>
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        );

    }
}


export default Login;