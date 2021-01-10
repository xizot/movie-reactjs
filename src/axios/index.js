import axios from "axios";
import { history } from "../helper";
const baseURL = process.env.REACT_APP_BASE_URL;
let headers = {};
if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
}
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
        const status = error.response ? error.response.status : null;
        if (status !== 401) {
            return Promise.reject(error);
        }
        const refreshToken = localStorage.refreshToken;
        if (!refreshToken) {
            history.push("/login");
            return Promise.reject(error);
        } else {
            headers.Authorization = `Bearer ${refreshToken}`;
            const newAxios = axios.create({
                baseURL: baseURL,
                headers
            })
            return newAxios
                .post(`/auth/refreshtoken`)
                .then((res) => {
                    localStorage.token = res.data.accessToken;
                    localStorage.refreshToken = res.data.refreshToken;
                    error.config.headers['Authorization'] = 'Bearer ' + res.data.accessToken;
                    error.config.baseURL =baseURL;
                    return axiosInstance.request(error.config);
                })
                .catch((error) => {
                    history.push("/login");
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken");
                    return Promise.reject(error);
                });
        }
    }
);
export default axiosInstance;
