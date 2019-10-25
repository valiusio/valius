import Axios from "axios";


var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};
const http = Axios.create({
    baseURL : process.env.BASE_URL
});

export default http;
