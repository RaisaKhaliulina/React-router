import * as React from "react-router-dom";
import NavBar from "./components/navBar";
import {Switch,Route, Redirect } from "react-router";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Posts from "./components/posts";
import NotFound from "./components/not-found";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      
      < Switch >
        <Route path="/"exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard"  component={Dashboard} />
        <Route path="/posts/:postId?/:display?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/admin" to="/dashboard"/>
        <Redirect to="/404"/>
      </ Switch> 
      
    </div>
  ); 
};

export default App;