import { useState, useContext } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import { postComment } from "../../../../utils/utils"
import { CommentItem } from "../CommentItem.jsx/CommentItem"
import { Loading } from "../../../Loading/Loading"

export const CommentInput = ({articleId}) => {
    const [commentInputBody, setCommentInputBody] = useState('')
    const [postedComment, setPostedComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useContext(UserContext)
    
    if (!user) {
        return <p>Login to comment</p>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const sendData = {
            "username": user,
            "body": commentInputBody
        }
        //need to add some logic so the comments re-render after posting (to avoid key conflicts)
        //tried to but it would re-render is component when I did so
        postComment(`articles/${articleId}/comments`, sendData, setPostedComment, setIsLoading)
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