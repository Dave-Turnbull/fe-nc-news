import { useState, useContext } from "react"
import { UserContext } from "../../../../contexts/UserContext"

import { deleteItem, formatDate } from "../../../../utils/utils"
import './CommentItem.css'
import { ItemCard } from "../../../ItemCard/ItemCard"
import { ItemCardMain } from "../../../ItemCard/components/ItemCardMain/ItemCardMain"
import { ItemCardFooter } from "../../../ItemCard/components/ItemCardFooter/ItemCardFooter"

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
        <ItemCard>
            <ItemCardMain>
            <p>{comment.body}</p>
            </ItemCardMain>
            <ItemCardFooter>
            <div className="commentInfo">
                <p>{comment.author}</p>
                <p>{formatDate(comment.created_at)}</p>
                <p>{comment.votes}</p>
                {user.username === comment.author&&<button disabled={isLoading} onClick={handleDelete}>Delete</button>}
            </div>
            </ItemCardFooter>
        </ItemCard>
        </article>
    )
}