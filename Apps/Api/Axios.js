import axios from "axios";

export default axios.create({
    baseURL: 'http://10.0.2.2:3000/api',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json', // format set to JSON
    }
});