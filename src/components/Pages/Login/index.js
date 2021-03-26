import React, { useEffect } from 'react'

const Login = (props) => {
    const enterPressed = (event) => {

        var body = document.getElementsByTagName('body')[0]
        var activeElement = document.activeElement;
        // var uname = document.getElementById('uname');
        // console.log("Active Element:", activeElement)
        // console.log("body:", body)
        if (body === activeElement) {
            // console.log("Krishna")
            // if ()
            if (event.keyCode === 8) {
                // console.log("Event:", event);
                props?.history?.goBack();
            }
        }

        // if (props.history.location.pathname === "/Login" || props.history.location.pathname === "/About" && event.keyCode === 8) {
        //     console.log("Event:", event);
        //     props?.history?.goBack();
        // }
    }
    useEffect(() => {
        document.addEventListener("keydown", enterPressed, false);
    }, [])

    return (
        <div id="mydiv">
            Login Page
        </div>
    )
}

export default Login
