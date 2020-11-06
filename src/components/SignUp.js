import React, { Component } from 'react';

import './SignUp.css'





class SignUp extends Component{
    render() {
        return(
            <div className="container">
            <form id="form" className="form">
                <h2>Sign Up</h2>
                <div className="form-control">
                    <label for="username">Nazwa Użytkownika</label>
                    <input type="text" id="username" placeholder="Podaj nazwę użytkownika" />
                    <small>błąd naswy</small>
                </div>
                <div className="form-control">
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder="Podaj maila" />
                    <small>błąd maila</small>
                </div>
                <div className="form-control">
                    <label for="password">Hasło</label>
                    <input type="password" id="password" placeholder="Podaj hasło" />
                    <small>błąd hasło</small>
                </div>
                <div className="form-control">
                    <label for="password2">Potwierdź hasło</label>
                    <input type="password" id="password2" placeholder="Podaj ponownie hasło" />
                    <small>błąd potwierdzenia hasła</small>
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