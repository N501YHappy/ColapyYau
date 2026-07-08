import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND;
const GET_METHOD = "/get";
export async function get() {
    let result = null;
    let success = false;
    try {
        result = (await axios.get(API_URL + GET_METHOD)).data;
        success = true;
    } catch (err) {
        result = err.message;
        console.error(result);
        success = false;
    }
    if (success) {
        result = result.message
    }
    return [success,result]
}
