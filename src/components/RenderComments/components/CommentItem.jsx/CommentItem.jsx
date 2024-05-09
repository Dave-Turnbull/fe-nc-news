import { useState, useContext } from "react"
import { UserContext } from "../../../../contexts/UserContext"

import { deleteItem, formatDate } from "../../../../utils/utils"
import './CommentItem.css'

export const CommentItem = ({comment}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const {user} = useContext(UserContext)

    const handleDelete =() => {
        setIsDeleted(true)
        setIsLoading(true)
        deleteItem(`comments/${comment.comment_id}`, setIsLoading)
    }

    if (isDeleted) {
        return (
            <article className="commentItem">
                <p>Comment Deleted</p>
            </article>
        )
    } 

    return (
        <article className="commentItem">
            <p>{comment.body}</p>
            <div className="commentInfo">
                <p>{comment.author}</p>
                <p>{formatDate(comment.created_at)}</p>
                <p>{comment.votes}</p>
                {user === comment.author&&<button disabled={isLoading} onClick={handleDelete}>Delete</button>}
            </div>
        </article>
    )
}