import Axios from "axios";

const token = localStorage.getItem('token');
var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};
if(token) {
    headers['Authorization'] = 'Bearer ' + token;
}


const http =  () => {
    return new Axios.create({
        baseURL: process.env.VUE_APP_API_BASE_URL,
        headers: headers
    });

}

export default http ;
