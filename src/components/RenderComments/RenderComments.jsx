import { useState, useEffect, useCallback } from "react"
import { CommentItem } from "./components/CommentItem.jsx/CommentItem"
import { Loading } from "../Loading/Loading"
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn"
import { CommentInput } from "./components/CommentInput/CommentInput"
import apiCall from "../../hooks/apiCall"
import './RenderComments.css'

export const RenderComments = ({article_id, comment_count}) => {
    if (comment_count === 0) {
        return <p>No Comments</p>
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
        .catch(err => {
            console.log(err)
            setErrorMessage(err.response.data.message)
        })
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