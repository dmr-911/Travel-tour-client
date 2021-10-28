import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCustom from './components/Pages/Common/NavbarCustom/NavbarCustom';
import Home from './components/Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarCustom></NavbarCustom>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
