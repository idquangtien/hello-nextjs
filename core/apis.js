import axios from "axios";

// const url = process.env.REACT_APP_API_URL + '/api/';
const url = '/api/';

const instance = axios.create({
    baseURL: url,
    // timeout: 1000,
    // mode: "cors",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json' 
    },
});

export default instance;