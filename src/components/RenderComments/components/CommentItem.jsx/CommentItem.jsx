import { formatDate } from "../../../../utils/utils"
import './CommentItem.css'

export const CommentItem = ({comment}) => {
    return (
        <article className="commentItem">
            <p>{comment.body}</p>
            <div className="commentInfo">
                <p>{comment.author}</p>
                <p>{formatDate(comment.created_at)}</p>
                <p>{comment.votes}</p>
            </div>
        </article>
    )
}