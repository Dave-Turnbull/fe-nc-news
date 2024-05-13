import { useState, useEffect } from "react"
import { CommentItem } from "./components/CommentItem.jsx/CommentItem"
import { Loading } from "../Loading/Loading"
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn"
import { CommentInput } from "./components/CommentInput/CommentInput"
import { handleError } from "../../utils/utils"
import apiCall from "../../hooks/apiCall"
import './RenderComments.css'

export const RenderComments = ({article_id, comment_count}) => {
    if (comment_count === 0) {
        return (
        <>
            <CommentInput articleId = {article_id}/>
            <p>No Comments</p>
        </>
        )
    }

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setIsLoading(true)
        const queriesToSend = {
            p: pageNumber
        }
        apiCall.get(`articles/${article_id}/comments`, queriesToSend)
        .then((response) => {
            setComments((current) => {
                return [...current, ...response.data.comments]
            })
            setIsLoading(false)
        })
        .catch(err => handleError(err, setErrorMessage))
    }, [pageNumber])


    if (errorMessage) {
        return (
            <main>
                <p>{errorMessage}</p>
            </main>
        )
    }

    if (isLoading) return <Loading/>

    return (
        <div className="render-comments">
        <CommentInput articleId = {article_id}/>
        <ul>
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
        </div>
    )
}