import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import apiCall from "../../hooks/apiCall";

export const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, SetArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        apiCall.get(`articles/${article_id}`).then((response) => {
            SetArticle(response.data)
            setIsLoading(false)
        }).catch(err => console.log(err))
    }, [])

    if (isLoading) return (<p>Loading</p>)
    
    return (
        <main>
            <article>
                <img src={article.article_img_url} />
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.body}</p>
                <p>{article.created_at}</p>
                <p>topic: {article.topic}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
            </article>
        </main>
    )
}