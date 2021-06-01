import axios from "axios";

// share a common base URL and configuration
export const API = axios.create({
    baseURL: "/v1/"
});

// will check if the global handler should be used or not (by default is true)
// Example: API.get('/v-api/api-endpoint', { handlerEnabled: false })
// const isHandlerEnabled = (config = {}) => {
//     return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
// };


const errorHandler = error => {
    return Promise.reject({ ...error });
};

const successHandler = response => {
    return response;
};

API.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);
