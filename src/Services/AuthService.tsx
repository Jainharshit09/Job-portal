import axios from 'axios'

const base_url = 'https://job-portal-backend-i3uk.onrender.com/auth/'
const loginUser = async (login: any) => {
    return axios.post(`${base_url}login`, login) 
    .then(res => res.data)
    .catch(err => { throw err; });
}

const authService = {
    loginUser,
};

export default authService;