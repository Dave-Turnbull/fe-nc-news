import { Link } from "react-router-dom"

export const ArticleItem = ({article}) => {
    return (
        <li key={article.article_id}>
            <Link to={`/article/${article.article_id}`}>
                <img src={article.article_img_url} />
                <h3>{article.title}</h3>
                <p>{article.author}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
                <p>{article.created_at}</p>
                <p>topic: {article.topic}</p>
            </Link>
        </li>
    )
}