import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from '../Pages/About/About';
import AddRecord from '../Pages/AddRecord/AddRecord';
import Home from '../Pages/Home/Home';

const Routers = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/About/:id" component={About} /> */}
            <Route path="/About/:id" render={(props) => <About {...props} />} />
            <Route path="/About" render={(props) => <About {...props} name="krishna" />} />
            {/* <Route path="/About" render={About} /> */}
            <Route path="/Add" component={AddRecord} />
        </Switch>
    )
}
export default Routers