import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCustom from './components/Pages/Common/NavbarCustom/NavbarCustom';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import About from './components/Pages/About/About';
import AddOffer from './components/Pages/AddOffer/AddOffer';
import ManageOrders from './components/Pages/ManageOrders/ManageOrders';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <NavbarCustom></NavbarCustom>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/addOffer">
            <AddOffer></AddOffer>
          </Route>
          <Route path="/allOrders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
