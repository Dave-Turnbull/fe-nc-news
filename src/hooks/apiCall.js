import axios from "axios"

const apiUrl = 'https://nc-news-b2gg.onrender.com/api/'

const api = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
})

export const get = (endpoint, queries) => {
    const req = {
        url: endpoint,
        method: 'get',
        data: queries
    }
    return api.request(req)
}

export const patch = (endpoint, body) => {
    const req = {
        url: endpoint,
        method: 'patch',
        data: body
    }
    return api.request(req)
}

export const post = (endpoint, body) => {
    const req = {
        url: endpoint,
        method: 'post',
        data: body
    }
    return api.request(req)
}

export const remove = (endpoint) => {
    const req = {
        url: endpoint,
        method: 'delete'
    }
    return api.request(req)
}

export default {get, patch, post, remove}