import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getSingleArticle } from "../../utils/utils";
import { RenderComments } from "../../components/RenderComments/RenderComments";
import { Voting } from "../../components/Voting/Voting";
import { Loading } from "../../components/Loading/Loading";
import { CommentInput } from "../../components/RenderComments/components/CommentInput/CommentInput";

export const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getSingleArticle(setArticle, setIsLoading, article_id)
    }, [])

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