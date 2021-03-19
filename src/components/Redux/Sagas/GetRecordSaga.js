import { call, put } from 'redux-saga/effects';
import { SuccessGetRecord_Action } from '../Actions';

//Saga-1 Start

export function* getApiData() {
    try {
        const res = yield call(getApiDataFun);
        // console.log("Res : ", res);
        yield put(SuccessGetRecord_Action(res));
    } catch (e) {
        console.log("Error:", e);
    }
}

const getApiDataFun = () => {
    // console.log("Res : ");
    const data = fetch(`http://192.168.1.181:3001/`, {
        headers: {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'mode': 'no-cors'
        },
        method: 'get',
    }).then((res) => {
        return res.json();
    }).then((data) => {
        return data;
    })
    // const data = api.get("/public/home")
    return data;
    //return "Krishna";
}
//Saga-1 End

