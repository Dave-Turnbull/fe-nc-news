import axios from "axios"

const apiUrl = 'https://nc-news-b2gg.onrender.com/api/'

export const get = (endpoint, queries) => {
    return axios.get(apiUrl + endpoint + (queries?queries:''))
}

export const patch = (endpoint, body) => {
    return axios.patch(apiUrl + endpoint, body)
}

export const post = (endpoint, body) => {
    return axios.post(apiUrl + endpoint, body)
}

export default {get, patch, post}