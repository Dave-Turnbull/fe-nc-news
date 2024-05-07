import axios from "axios"

const apiUrl = 'https://nc-news-b2gg.onrender.com/api/'

export const get = (endpoint, queries) => {
    return axios.get(apiUrl + endpoint + (queries?queries:''))
}

export default {get}