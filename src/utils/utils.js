import apiCall from "../hooks/apiCall"

export const handleError = (err, setErrorMessage) => {
    console.log(err)
    if (err.code === "ECONNABORTED") {
        setErrorMessage("Request timed out")
        return err
    }
    if (err.response) {
        const errMessage = err.response.data.message
        const formattedMessage = errMessage.charAt(0).toUpperCase() + errMessage.slice(1) + '.';
        setErrorMessage(formattedMessage)
        return err
    }
    setErrorMessage(err)
}

export const getTopics = (setTopics, setIsLoading) => {
    setIsLoading(true)
    return apiCall.get('topics').then((response) => {
        setTopics(response.data.topics)
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