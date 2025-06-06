import axiosInstance from "../Interceptor/axiosInterceptor";

const registerUser = async (user: any) => {
    return axiosInstance.post(`/users/register`, user) 
    .then(res => res.data)
    .catch(err => { throw err; });
}

const loginUser = async (login: any) => {
    return axiosInstance.post(`/users/login`, login) 
    .then(res => res.data)
    .catch(err => { throw err; });
}

const sendOtp = async (email: any) => {
    return axiosInstance.post(`/users/sendOtp/${email}`) 
    .then(res => res.data)
    .catch(err => { throw err; });
}
const verfiyOtp = async (email:any,otp: any) => {
    return axiosInstance.get(`/users/verifyOtp/${email}/${otp}`) 
    .then(res => res.data)
    .catch(err => { throw err; });
}
const changePassword=async(email:any,password:any)=>{
    return axiosInstance.post(`/users/changePassword`,{email,password})
    .then(res=>res.data)
    .catch(err=>{throw err;});
}
const userService = {
    registerUser,
    loginUser,
    sendOtp,
    verfiyOtp,
    changePassword
};


export default userService;