import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RequestGetRecord_Action, RequestInsertRecord_Action } from '../../Redux/Actions';

const AddRecord = () => {
    const [userInfo, setUserInfo] = useState({
        uname: "",
        pwd: "",
        email: ""
    });

    const dispatch = useDispatch();
    const record = useSelector(state => state.apiReducer.data);

    useEffect(() => {
        dispatch(RequestGetRecord_Action());
        // console.log("1st effect")
    }, [dispatch])

    // console.log("Page Render");

    useEffect(() => {
        // console.log("Data:", record[0]);
        // dispatch(RequestGetRecord_Action());
    }, [record])

    const btnAddhandler = () => {
        // fetch(`http://192.168.1.181:3001/insert?uname=${userInfo.uname}&pwd=${userInfo.pwd}&email=${userInfo.email}`, {
        //     headers: {
        //         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //         'mode': 'no-cors'
        //     },
        //     method: 'get',
        //     mode: 'no-cors'
        // }).then((res) => {
        //     console.log("Res:", res)
        // })
        dispatch(RequestInsertRecord_Action(userInfo));
        dispatch(RequestGetRecord_Action());
    }

    const btnGethandler = () => {
        // fetch(`http://192.168.1.181:3001/`, {
        //     headers: {
        //         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //         'mode': 'no-cors'
        //     },
        //     method: 'get',
        // }).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     console.log("Data:", data);
        // })
    }

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setUserInfo((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    return (
        <div className="App-header" >
            <Link to="/">Home</Link>
            <h1>Add Record</h1>
            Enter Username : <input value={userInfo.uname} onChange={inputHandler} name="uname" id="uname" />
            <br />
            Enter Password : <input value={userInfo.pwd} onChange={inputHandler} name="pwd" id="pwd" />
            <br />
            Enter Email : <input value={userInfo.email} onChange={inputHandler} name="email" id="email" />
            <br />
            <input type="button" onClick={btnAddhandler} value="Add" id="btnAdd" />
            <br />
            <input type="button" onClick={btnGethandler} value="Get" id="btnGet" />
            <h1>Record</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                    {record?.map((data, index) =>
                        <tr key={index}>
                            <td>{data.userid}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AddRecord
