import { Link } from "react-router-dom"
import { formatDate } from "../../../../utils/utils"
import { ItemCard } from "../../../ItemCard/ItemCard"
import { ItemCardFooter } from "../../../ItemCard/components/ItemCardFooter/ItemCardFooter"
import './ArticleItem.css'
import { ItemCardMain } from "../../../ItemCard/components/ItemCardMain/ItemCardMain"

export const ArticleItem = ({article}) => {
    return (
        <div className="article-item">
        <Link to={`/article/${article.article_id}`}>
            <ItemCard>
                <img src={article.article_img_url} />
                <ItemCardMain>
                    <h3>{article.title}</h3>
                    <p>{article.author}</p>
                </ItemCardMain>
                <ItemCardFooter>
                    <p>Comments: {article.comment_count}</p>
                    <p>Votes: {article.votes}</p>
                    <p>{formatDate(article.created_at)}</p>
                    <p>topic: {article.topic}</p>
                </ItemCardFooter>
            </ItemCard>
        </Link>
        </div>
    )
}