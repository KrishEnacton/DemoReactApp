import React, { useEffect } from 'react'
import { auth, provider } from '../../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Switch, useHistory } from "react-router-dom";

const Login = (props) => {

    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();


    useEffect(() => {
        if (user) {
            history.push("Whatsapp");
        }
        else {
        }

    }, [loading, user])

    const signinHandler = () => {
        auth.signInWithPopup(provider).catch(err => {
            console.log("Error:", err);
        })
    }

    return (
        <div id="mydiv" style={{ height: 100, backgroundColor: "red", textAlign: "center", paddingTop: 10 }} >
            <button id="btnSignin" style={{ flex: 1, alignSelf: "center" }} onClick={signinHandler} >
                Sign in with google
            </button>
        </div>
    )
}

export default Login
