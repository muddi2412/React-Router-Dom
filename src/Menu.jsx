import React from 'react';
import {Route,Switch,NavLink} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Service from './Service';
import Error404 from './Error404';
import User from "./User";
import Search from "./Search";
const Menu = () => {

    return(
    <>
    <div className="Navbar">
    <NavLink exact to="/" activeClassName='active_class' className="menu">Home</NavLink>
    <NavLink exact to="/about" activeClassName='active_class' className="menu">About</NavLink>
    <NavLink exact to="/service" activeClassName='active_class' className="menu">Service</NavLink>
    <NavLink exact to="/search" activeClassName='active_class' className="menu">Search</NavLink>
    <NavLink exact to="/user" activeClassName='active_class' className="menu">User</NavLink>
    </div>
    <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" render={()=><About name="About"/>}></Route>
            <Route exact path="/service" render={()=><Service name="Service"/>}></Route>
            <Route exact path="/search" render={()=><Search name="Search"/>}></Route>
            <Route path="/user/:uname" component={User}></Route>
            <Route component={Error404}></Route>
        </Switch>
    </>)
}

export default Menu;