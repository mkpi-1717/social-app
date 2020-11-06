import React from 'react';
import './App.css';
import SideLeft from './SideLeft';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1> Social-app </h1>

      </header>

      <Router>
        <SideLeft />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
