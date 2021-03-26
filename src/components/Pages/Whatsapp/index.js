import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, provider } from '../../Firebase';
import Login from '../Login';
import { Route, Switch, useHistory } from "react-router-dom";
import firebase from 'firebase';
import * as EmailValidator from 'email-validator';


const Whatsapp = (props) => {

    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (!user && !loading) {
            history.push("Login")
        }
        else {
        }

    }, [loading]);

    useEffect(() => {
        if (user) {
            console.log("User:", user);
            db.collection('users').doc(user.uid).set({
                email: user.email,
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                photoURL: user.photoURL
            }, {
                merge: true
            })
        }
    }, [user]);

    const chatWithHandler = () => {
        const input = prompt("Please enter email address for the user you wish to chat with.");
        if (EmailValidator.validate(input)) {
            db.collection("chats").add({
                users: [user.email, input]
            });
        }

        console.log("hello");
    }

    return (
        <div>
            <h1>Whatsapp</h1>
            <button onClick={chatWithHandler} >Start a new chat</button>
        </div>
    )
}

export default Whatsapp
