import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, NavLink, useLocation, useParams } from "react-router-dom";

function TmpFile(props) {
    const location = useParams();
    console.log("Location:", location);
    return (
        <div>
            <header className="App-header">
                <Link to="/" >ClickMe</Link>
                <span>Hello Second Page:{location.id}</span>
            </header>
        </div>
    );
}

export default TmpFile;
