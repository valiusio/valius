import Axios from "axios";

const token = localStorage.getItem('token');
var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};
const http = Axios.create({});

export default http;
