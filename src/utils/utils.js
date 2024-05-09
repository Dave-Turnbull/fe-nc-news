import apiCall from "../hooks/apiCall"

export const getTopics = (setTopics, setIsLoading) => {
    setIsLoading(true)
    return apiCall.get('topics').then((response) => {
        setTopics(response.data.topics)
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const getSingleArticle = (SetArticle, setIsLoading, article_id) => {
    setIsLoading(true)
    apiCall.get(`articles/${article_id}`).then((response) => {
        SetArticle(response.data)
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const getComments = (setComments, setIsLoading, article_id, pageNumber) => {
    setIsLoading(true)
    apiCall.get(`articles/${article_id}/comments`, `p=${pageNumber}`).then((response) => {
        setComments((current) => {
            return [...current, ...response.data.comments]
        })
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const changeVotes = (endpoint, votes, setVoteNum, setIsLoading) => {
    setIsLoading(true)
    const body = {
        "inc_votes": votes
    }
    apiCall.patch(endpoint, body).then((response) => {
        setVoteNum(response.data.votes)
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const postComment = (endpoint, body, setPostedComment, setIsLoading) => {
    setIsLoading(true)
    apiCall.post(endpoint, body).then((response) => {
        setPostedComment(response.data)
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const deleteItem = (endpoint, setIsLoading) => {
    apiCall.remove(endpoint).then(() => {
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const formatDate = (dateString) => {
    const stringData = dateString.match(/(\d+)/g)
    return `${stringData[3]}:${stringData[4]}, ${stringData[2]}/${stringData[1]}/${stringData[0]}`
}