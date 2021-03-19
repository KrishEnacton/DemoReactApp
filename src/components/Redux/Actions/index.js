import { REQUEST_GET_RECORD, SUCCESS_GET_RECORD, REQUEST_INSERT_RECORD, SUCCESS_INSERT_RECORD } from "../Constants";


export const RequestGetRecord_Action = () => {
    // console.log("Get User Action Called getPublicUserApiData");
    return {
        type: REQUEST_GET_RECORD
    };
}

export const SuccessGetRecord_Action = (data) => {
    // console.log("Get User Action Called getPublicUserApiData");
    return {
        type: SUCCESS_GET_RECORD,
        payload: data
    };
}

export const RequestInsertRecord_Action = (data) => {
    // console.log("Insert User Action Called getPublicUserApiData");
    return {
        type: REQUEST_INSERT_RECORD,
        payload: data
    };
}

export const SuccessInsertRecord_Action = (data) => {
    // console.log("Insert User Action Called getPublicUserApiData");
    return {
        type: SUCCESS_INSERT_RECORD,
        payload: data
    };
}