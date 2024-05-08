import { Link } from "react-router-dom"
import { formatDate } from "../../../../utils/utils"

export const ArticleItem = ({article}) => {
    return (
        <Link to={`/article/${article.article_id}`}>
            <img src={article.article_img_url} />
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <p>{formatDate(article.created_at)}</p>
            <p>topic: {article.topic}</p>
        </Link>
    )
}