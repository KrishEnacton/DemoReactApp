import React from 'react';
import { Link, useParams } from "react-router-dom";

function About(props) {
    const params = useParams();
    // console.log("Props:", props);
    return (
        <div>
            <header className="App-header">
                <Link onClick={() => props.history.goBack()}> ClickMe</Link>
                {params.id ?
                    <span>Hello Second Page:{params.id}</span>
                    : null}
                {props.name ?
                    <span>Hello Second Page:{props.name}</span> : null}
            </header>
        </div>
    );
}

export default About;
