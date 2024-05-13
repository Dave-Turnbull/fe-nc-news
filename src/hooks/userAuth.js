import { handleError } from "../utils/utils"
import apiCall from "./apiCall"

export const userAuth = (userLogin, setIsLoading, setErrorMessage, setUser) => {
    setIsLoading(true)
    return apiCall.get('users').then((response) => {
        const user = response.data.users.find((userObject) => userObject.username === userLogin)
        if (!user) {
            setErrorMessage('User not found!')
        } else {
            setUser(user)
        }
        setIsLoading(false)
    }).catch(err => handleError(err, setErrorMessage))
}