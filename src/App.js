import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Destination from "./Component/Destination/Destination";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import bg from "./urban-riders/images/Bg.png";

export const passengerContext = createContext();

function App() {
  const [loggedInPassenger, setLoggedInPassenger] = useState({});

  return (
    <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <passengerContext.Provider
        value={[loggedInPassenger, setLoggedInPassenger]}
      >
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
           
            <PrivateRoute path="/destination/:services">
              <Destination></Destination>
            </PrivateRoute>
            
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </passengerContext.Provider>
    </div>
  );
}

export default App;
