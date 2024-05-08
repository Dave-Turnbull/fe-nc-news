import apiCall from "../hooks/apiCall"

export const getArticles = (setArticles, setTotalArticles, setIsLoading, pageNumber = 1) => {
    setIsLoading(true)
    return apiCall.get('articles', `?p=${pageNumber}`).then((response) => {
        setArticles((current) => {
            return [...current, ...response.data.articles]
        })
        setTotalArticles(response.data.total_count)
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
    apiCall.get(`articles/${article_id}/comments`, `?p=${pageNumber}`).then((response) => {
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
        console.log(response.data.votes, 'votes')
        setVoteNum(response.data.votes)
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const formatDate = (dateString) => {
    const stringData = dateString.match(/(\d+)/g)
    return `${stringData[3]}:${stringData[4]}, ${stringData[2]}/${stringData[1]}/${stringData[0]}`
}