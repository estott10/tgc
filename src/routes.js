import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import Locations from './Components/Locations/Locations';
import About_Us from './Components/About_Us/About_Us';
import { Switch, Route } from 'react-router-dom';


export default(
    <Switch>
        <Route component = {Dashboard} exact path ='/'></Route>
        <Route component = {Contact} path ='/contact'></Route>
        <Route component = {Locations} path ='/locations'></Route>
        <Route component = {About_Us} path ='/about'></Route>
    </Switch>
)