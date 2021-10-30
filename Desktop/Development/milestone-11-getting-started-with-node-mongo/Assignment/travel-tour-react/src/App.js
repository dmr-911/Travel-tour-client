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
import AddOrder from './components/Pages/AddOrder/AddOrder';
import PrivateRoute from './components/Pages/PrivateRoute/PrivateRoute';
import Footer from './components/Pages/Footer/Footer';
import SignIn from './components/Pages/SignIn/SignIn';
import DestinationDetails from './components/Pages/Home/DestinationDetails/DestinationDetails';

function App() {
  return (
    <div className="App bg-dark">
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
          <PrivateRoute path="/addOffer">
            <AddOffer></AddOffer>
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/addOrder/:id">
            <AddOrder></AddOrder>
          </PrivateRoute>
            <Route path="/signUp">
              <SignIn></SignIn>
            </Route>
            <Route path="/destination/:id">
            <DestinationDetails></DestinationDetails>    
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
