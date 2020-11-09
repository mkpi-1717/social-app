import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            nameError: "",
            emailError: "",
            passwordError: "",
            password2Error: "",
        }
    }

    submitUser = (event) => {
        event.preventDefault();
        var validator = require("email-validator");

        if (this.inputName.value.length <= 4) {
            this.setState({
                nameError: "Błąd nazwy",
            });
        } else {
            this.setState({
                nameError: "  ",
            });
        }


        if (this.inputEmail.value !== 0 ) {   
            this.setState({
                emailError: "Błąd adresu email"
            });
        } else {
            this.setState({
                emailError: " "
            });
        }


        if (this.inputPassword.value === '' ) {        
            this.setState({
                passwordError: "Błąd hasła"
            });
        } else {
            this.setState({
                passwordError: " "
            });
        }

        if (this.inputPassword2.value !== this.inputPassword.value || this.inputPassword2.value === '') {        
            this.setState({
                password2Error: "Hasła są różne"
            });
        } else {
            this.setState({
                password2Error: " "
            });
        }


        console.log(this.inputName.value, this.inputEmail.value, this.inputPassword.value, this.inputPassword2.value);
    }




    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitUser} id="form" className="form">
                    <h2>Sign Up</h2>
                    <div className="form-control">
                        <label htmlFor="username">Nazwa Użytkownika</label>
                        <input ref={input => this.inputName = input} type="text" id="username" placeholder="Podaj nazwę użytkownika" />
                        <small>{this.state.nameError}</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input ref={input => this.inputEmail = input} type="text" id="email" placeholder="Podaj maila" />
                        <small>{this.state.emailError}</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Hasło</label>
                        <input ref={input => this.inputPassword = input} type="password" id="password" placeholder="Podaj hasło" />
                        <small>{this.state.passwordError}</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password2">Potwierdź hasło</label>
                        <input ref={input => this.inputPassword2 = input} type="password" id="password2" placeholder="Podaj ponownie hasło" />
                        <small>{this.state.password2Error}</small>
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        );

    }
}

// const SignUp = () => {
//     return <h1>SignUp</h1>
// }

export default SignUp;