import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="App-header">
            <h1>Home</h1>
            <Link to="/Add">Add Data</Link>
            <Link to="/About/2">About</Link>
            <Link to="/About">About</Link>
        </div>
    )
}

export default Home
