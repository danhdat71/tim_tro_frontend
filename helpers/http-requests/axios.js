import axios from 'axios';

axios.defaults.baseURL = process.env.API;
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response.status == 422) {
            return error.response.data;
        } else if (error.response.status == 400) {
            return error.response.data; 
        } else if (error.response.status == 401) {
            return error.response.data;
        }
    }
);

export default axios;