import { SUCCESS_INSERT_RECORD, SUCCESS_GET_RECORD } from "../Constants";

const initState = {
    records: [],
    loader: true
};

const ApiReducer = (state = initState, action) => {

    switch (action.type) {
        case SUCCESS_INSERT_RECORD:
            console.log("SUCCESS_INSERT_RECORD Called");
            return state;

        case SUCCESS_GET_RECORD:
            // console.log("SUCCESS_GET_RECORD Called", action.payload);
            return {
                ...state,
                data: action.payload,
                loader: false
            }

        default:
            return state;

    }
}
export default ApiReducer