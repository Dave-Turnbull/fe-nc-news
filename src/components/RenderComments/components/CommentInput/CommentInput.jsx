import { useState, useContext } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import { CommentItem } from "../CommentItem.jsx/CommentItem"
import { Loading } from "../../../Loading/Loading"
import { handleError } from "../../../../utils/utils"
import apiCall from "../../../../hooks/apiCall"

export const CommentInput = ({articleId}) => {
    const [commentInputBody, setCommentInputBody] = useState('')
    const [postedComment, setPostedComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const {user} = useContext(UserContext)
    
    if (!user) {
        return <p>Login to comment</p>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!commentInputBody) {
            setErrorMessage('Write a comment before posting')
            return
        }
        const sendData = {
            "username": user,
            "body": commentInputBody
        }
        //need to add some logic so the comments re-render after posting (to avoid key conflicts)
        //tried to but it would re-render is component when I did so
        setIsLoading(true)
        apiCall.post(`articles/${articleId}/comments`, sendData).then((response) => {
            setPostedComment(response.data)
            setIsLoading(false)
        }).catch(err => handleError(err, setErrorMessage))
    }

    if (errorMessage) {
        return (
            <section>
                <p>Failed to post comment!</p>
                <p>{errorMessage}</p>
                <button onClick={() => {
                    setPostedComment('')
                    setErrorMessage('')
                    setIsLoading(false)
                    }}>Try again</button>
            </section>
        )
    }

    if (postedComment) {
        return (
            <section>
                <p>Comment Posted!</p>
                <CommentItem comment={postedComment}/>
                <button onClick={() => {setPostedComment('')}}>Write another comment</button>
            </section>
        )
    }

    return (
        <form>
            <p>Commenting as {user}</p>
            <label htmlFor="commentinputbody">Text:</label>
            <input id="commentinputbody" value={commentInputBody} onChange={e => setCommentInputBody(e.target.value)}/>
            <button disabled={isLoading} onClick={handleSubmit}>Submit</button>
            {isLoading?<Loading/>:<></>}
        </form>
    )
}