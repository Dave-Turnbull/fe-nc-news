import axios from "axios"

const apiUrl = 'https://nc-news-b2gg.onrender.com/api/'

const apiReq = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
})

export const get = (endpoint, queries) => {
    return apiReq.get(apiUrl + endpoint + (queries?queries:''))
}

export const patch = (endpoint, body) => {
    return apiReq.patch(apiUrl + endpoint, body)
}

export const post = (endpoint, body) => {
    return apiReq.post(apiUrl + endpoint, body)
}

export default {get, patch, post}