import axios from 'axios'

const base_url = 'http://localhost:8080/users/'

const registerUser = async (user: any) => {
    return axios.post(`${base_url}register`, user) 
    .then(res => res.data)
    .catch(err => { throw err; });
}

const loginUser = async (login: any) => {
    return axios.post(`${base_url}login`, login) 
    .then(res => res.data)
    .catch(err => { throw err; });
}

const sendOtp = async (email: any) => {
    return axios.post(`${base_url}sendOtp/${email}`) 
    .then(res => res.data)
    .catch(err => { throw err; });
}
const verfiyOtp = async (email:any,otp: any) => {
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`) 
    .then(res => res.data)
    .catch(err => { throw err; });
}
const changePassword=async(email:any,password:any)=>{
    return axios.post(`${base_url}changePassword`,{email,password})
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