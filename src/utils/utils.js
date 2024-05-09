import apiCall from "../hooks/apiCall"

export const getTopics = (setTopics, setIsLoading) => {
    setIsLoading(true)
    return apiCall.get('topics').then((response) => {
        setTopics(response.data.topics)
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

export const deleteItem = (endpoint, setIsLoading) => {
    apiCall.remove(endpoint).then(() => {
        setIsLoading(false)
    }).catch(err => console.log(err))
}

export const formatDate = (dateString) => {
    const stringData = dateString.match(/(\d+)/g)
    return `${stringData[3]}:${stringData[4]}, ${stringData[2]}/${stringData[1]}/${stringData[0]}`
}