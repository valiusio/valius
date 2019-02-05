import axios from 'axios';
import { store } from './../store'



const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL ,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization : 'Bearer '+ window.localStorage.getItem('token')
    }
});

export default { axiosInstance };
