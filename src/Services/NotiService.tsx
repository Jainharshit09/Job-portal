import axiosInstance from '../Interceptor/axiosInterceptor'

const getNotification = async (id: any) => {
    return axiosInstance.get(`/notification/get/${id}`)
        .then(res => res.data)
        .catch(err => { throw err })
}

const readNotification = async (id: any) => {
    return axiosInstance.put(`/notification/read/${id}`)
        .then(res => res.data)
        .catch(err => { throw err })
}

const NotiService = {
    getNotification,
    readNotification
}

export default NotiService
