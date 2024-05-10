import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { RenderComments } from "../../components/RenderComments/RenderComments";
import { Voting } from "../../components/Voting/Voting";
import { Loading } from "../../components/Loading/Loading";
import { handleError } from "../../utils/utils";
import apiCall from "../../hooks/apiCall";

export const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setIsLoading(true)
        apiCall.get(`articles/${article_id}`).then((response) => {
            setArticle(response.data)
            setIsLoading(false)
        }).catch(err => handleError(err, setErrorMessage))
    }, [])

    if (errorMessage) {
        return (
            <main>
                <p>{errorMessage}</p>
            </main>
        )
    }

    if (isLoading) return (<Loading/>)
    
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
                <Voting endpoint={`articles/${article_id}`} itemVotes={article.votes}/>
                <section>
                    <RenderComments article_id={article_id} comment_count={article.comment_count}/>
                </section>
            </article>
        </main>
    )
}