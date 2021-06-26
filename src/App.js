import React, { createContext, useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import DashBord from "./Components/DashBord/DashBord";
import ManageService from "./Components/ManageService/ManageService";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import Blog from "./Components/Blog/Blog";
import { auth } from "./Components/Login/LoginManager";
import Review from "./Components/Review/Review";





export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setLoggedInUser(user)
      } else {
        setLoggedInUser({})
      }
    });
  }, [setLoggedInUser])
  return (

    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <DashBord></DashBord>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/manageService">
              <ManageService></ManageService>
            </Route>
            <Route exact path="/">
              <Home ></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
