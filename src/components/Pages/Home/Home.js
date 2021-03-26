import React, { useEffect } from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => {

    const enterPressed = (event) => {

        var body = document.getElementsByTagName('body')[0]
        var activeElement = document.activeElement;
        if (body === activeElement) {
            if (event.keyCode === 8) {
                props?.history?.goBack();
            }
        }
        // console.log("Event:", event);
    }

    useEffect(() => {
        // console.log("Effect Called");
        document.addEventListener("keydown", enterPressed, false);
    }, [])

    return (
        <div className="App-header">
            <h1>Home</h1>
            <Link to="/Add">Add Data</Link>
            <Link to="/About/2">About</Link>
            <Link to="/About">About</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Whatsapp">Whatsapp</Link>
        </div>
    )
}

export default Home
