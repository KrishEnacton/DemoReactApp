import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import About from '../Pages/About/About';
import AddRecord from '../Pages/AddRecord/AddRecord';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Whatsapp from '../Pages/Whatsapp';

const Routers = (props) => {


    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/About/:id" component={About} /> */}
            <Route path="/About/:id" render={(props) => <About {...props} />} />
            <Route exact path="/About" render={(props) => <About {...props} name="krish" />} />
            {/* <Route path="/About" render={About} /> */}
            <Route path="/Add" component={AddRecord} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Whatsapp" component={Whatsapp} />
        </Switch>
    )
}
export default Routers