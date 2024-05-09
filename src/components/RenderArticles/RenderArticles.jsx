import { useState, useEffect } from 'react'
import apiCall from '../../hooks/apiCall'
import { ArticleItem } from './components/ArticleItem/ArticleItem'
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn'
import './RenderArticles.css'

export const RenderArticles = ({queries}) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [totalArticles, setTotalArticles] = useState(-1)

    useEffect(() => {
        setArticles([])
    }, [queries])

    useEffect(() => {
        const queriesToSend = {
            ...queries,
            p: pageNumber
        }
        setIsLoading(true)
        apiCall.get('articles', queriesToSend).then((response) => {
            setArticles((current) => {
                return [...current, ...response.data.articles]
            })
            setTotalArticles(response.data.total_count)
            setIsLoading(false)
        }).catch(err => console.log(err))
    }, [pageNumber, queries])

   return (
    <main>
        <p>{queries&&queries.topic_slug}</p>
        <ul className='articlesList'>
            {articles.map(article => {
                return (
                <li key={article.article_id}>
                    <ArticleItem article={article}/>
                </li>
                )
            })}
        </ul>
        <LoadMoreBtn 
            isLoading = {isLoading} 
            setPageNumber = {setPageNumber}
            currentItems = {articles.length}
            totalItems = {totalArticles}
        />
    </main>
   )
}