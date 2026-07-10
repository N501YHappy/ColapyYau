import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND;
const GET_METHOD = "/get";
const STATUS_METHOD = "/status";
let total = null;
export async function getTotal() {
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
    if (success) {
        result = result.total;
    }
    return [success, result];
}

export async function getById(id) {
    let result = null;
    let success = false;
    try {
        result = (await axios.get(API_URL + GET_METHOD + "/" + id)).data;
        success = true;
    } catch (err) {
        result = err.message;
        console.log(result);
        success = false;
    }
    if (success) {
        result = result.message;
    }
    return [success, result];
}
export async function getRandom() {
    if (total === null) {
        let [_success, _mTotal] = await getTotal();
        if (!_success) {
            return [false, _mTotal];
        }
        total = _mTotal;
    }
    console.log(total);
    let [_success, _result] = await getById(getRandomInt(1, total));
    return [_success, _result];
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
