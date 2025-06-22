import axios, { InternalAxiosRequestConfig } from "axios";
import navigateToLogin from "../Services/NavigateService";

const axiosInstance = axios.create({
    baseURL: "https://job-portal-backend-i3uk.onrender.com"
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        let token = localStorage.getItem("token");

        if (token) {
            token = token.replace(/^"|"$/g, ''); 
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const setUpResponseInterceptor = (navigate:any) => {
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigateToLogin(navigate);
            }
            return Promise.reject(error);
        }
    );
}

export default axiosInstance;
