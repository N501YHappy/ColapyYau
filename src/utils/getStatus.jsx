import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND;
const STATUS_METHOD = "/";
export async function getServerStatus() {
    let result = null;
    let success = false;
    try {
        result = (await axios.get(API_URL + STATUS_METHOD)).data;
        success = true;
    } catch (err) {
        result = err.message;
        console.log(result);
        success = false;
    }
    return [success, result];
}