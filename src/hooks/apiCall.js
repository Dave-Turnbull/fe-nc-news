import axios from "axios"

const apiUrl = 'https://nc-news-b2gg.onrender.com/api/'

export const get = (endpoint, queries) => {
    return axios.get(apiUrl + endpoint + (queries?queries:''))
}

export const patch = (endpoint, body) => {
    return axios.patch(apiUrl + endpoint, body).then((repsonse) => {
        console.log(repsonse)
        return repsonse
    })
}

export default {get, patch}