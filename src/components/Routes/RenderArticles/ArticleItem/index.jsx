export const ArticleItem = ({article}) => {
    console.log(article)
    return (
        <li key={article.id}>
            <img src={article.article_img_url} />
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <p>{article.created_at}</p>
            <p>topic: {article.topic}</p>
        </li>
    )
}