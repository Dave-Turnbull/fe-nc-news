import { useState, useEffect, useCallback } from "react"
import { getComments } from "../../utils/utils"
import { CommentItem } from "./components/CommentItem.jsx/CommentItem"
import { Loading } from "../Loading/Loading"
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn"
import { CommentInput } from "./components/CommentInput/CommentInput"
import './RenderComments.css'

export const RenderComments = ({article_id, comment_count}) => {
    if (comment_count === 0) {
        return <p>No Comments</p>
    }

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        getComments(setComments, setIsLoading, article_id, pageNumber)
    }, [pageNumber])

    if (isLoading) return <Loading/>

    return (
        <>
        <CommentInput articleId = {article_id}/>
        <ul className="render-comments">
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <CommentItem comment={comment}/>
                    </li>
                )
            })}
        </ul>
            <LoadMoreBtn 
                isLoading = {isLoading} 
                setPageNumber = {setPageNumber}
                currentItems = {comments.length}
                totalItems = {comment_count}
            />
        </>
    )
}