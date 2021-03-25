import { call } from 'redux-saga/effects';

export function* CatchRequestInsert(data) {
    try {
        yield call(CallApiForInsert, data);
        // console.log("sagaCalled : ");
        // yield put(SuccessInsertRecord_Action(res));
    } catch (e) {
        console.log("Error:", e);
    }
}

const CallApiForInsert = (data) => {
    //console.log("ResKrishna : ", data.payload);
    const res = fetch(`http://192.168.1.181:3001/insert?uname=${data.payload.uname}&pwd=${data.payload.pwd}&email=${data.payload.email}`, {
        headers: {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'mode': 'no-cors'
        },
        method: 'get',
        mode: 'no-cors'
    }).then((res) => {
        // console.log("Res:", res)
        return res;
    })
    // const data = api.get("/public/home")
    return res;
    //return "Krishna";
}
//Saga-1 End
