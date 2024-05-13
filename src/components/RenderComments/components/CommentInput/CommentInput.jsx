import { useState, useContext } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import { CommentItem } from "../CommentItem.jsx/CommentItem"
import { Loading } from "../../../Loading/Loading"
import { handleError } from "../../../../utils/utils"
import apiCall from "../../../../hooks/apiCall"
import { ItemCard } from "../../../ItemCard/ItemCard"
import { ItemCardMain } from "../../../ItemCard/components/ItemCardMain/ItemCardMain"
import { ItemCardFooter } from "../../../ItemCard/components/ItemCardFooter/ItemCardFooter"
import './CommentInput.css'

export const CommentInput = ({articleId}) => {
    const [commentInputBody, setCommentInputBody] = useState('')
    const [postedComment, setPostedComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const {user} = useContext(UserContext)
    
    if (!user.username) {
        return <p>Login to comment</p>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!commentInputBody) {
            setErrorMessage('Write a comment before posting')
            return
        }
        const sendData = {
            "username": user.username,
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
        <div className="comment-input">
        <ItemCard>
            <ItemCardMain>
                <h3>Leave a comment:</h3>
                <form>
                    <label htmlFor="commentinputbody">Text:</label>
                    <textarea id="commentinputbody" value={commentInputBody} onChange={e => setCommentInputBody(e.target.value)}/>
                    <button disabled={isLoading} onClick={handleSubmit}>{isLoading?<Loading/>:'Submit'}</button>
                </form>
            </ItemCardMain>
            <ItemCardFooter>
                <p>Commenting as {user.username}</p>
            </ItemCardFooter>
        </ItemCard>
        </div>
    )
}