import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import TmpFile from './tmpFile';

function App() {
  const [state, setState] = useState("Krishna");

  const onClickHandler = () => {
    //alert("Hello");
    setState(state + 1);
  }

  const handleInputChange = (event) => {
    //alert("Hello");
    //setState(state + 1);
    console.log("event:", event);
    setState(event.target.value);
    var v1 = ["krishna", "kapadia"];
    var v2 = [...v1, "hello"];
    console.log("val:", v2);
  }

  const demo = () => {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/tmpFile/1" >ClickMe</Link>
          <NavLink activeClassName="" to="/tmpFile/1" >ClickMe With NavLink</NavLink>
          <span>{state}</span>
          <input onChange={handleInputChange} />
          <button onClick={onClickHandler}>ClickMe</button>
        </header>
      </div>
    )
  }

  return (
    <Switch>
      <Route exact path="/" component={demo} />
      <Route path="/tmpFile/:id" component={TmpFile} />

    </Switch>

  );
}

export default App;
