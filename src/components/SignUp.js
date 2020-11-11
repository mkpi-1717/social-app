import React, { Component } from 'react';
import './SignUp.css'



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameError: "",
            emailError: "",
            passwordError: "",
            password2Error: "",
        }

        this.mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }

    submitUser = (event) => {
        event.preventDefault();

        this.setState({
            nameError: (this.inputName.value.length <= 4)?"Błąd nazwy":"",
            emailError: (!this.mailRegex.test(this.inputEmail.value))?"Błąd adresu email":"",
            passwordError: (this.inputPassword.value === '' )?"Błąd hasła":"",
            password2Error: (this.inputPassword2.value !== this.inputPassword.value)?"Hasła są różne":""
        });


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