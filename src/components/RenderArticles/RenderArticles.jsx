import { useState, useEffect } from 'react'
import apiCall from '../../hooks/apiCall'
import { ArticleItem } from './components/ArticleItem/ArticleItem'
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn'
import './RenderArticles.css'
import { SortBy } from '../SortBy/SortBy'

export const RenderArticles = ({queries}) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [totalArticles, setTotalArticles] = useState(-1)
    const [sortItemsBy, setSortItemsBy] = useState('article_id')
    const [isAscOrder, setIsAscOrder] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setArticles([])
    }, [queries, sortItemsBy, isAscOrder])

    useEffect(() => {
        const queriesToSend = {
            ...queries,
            sort_by: sortItemsBy,
            order: isAscOrder?'asc':'desc',
            p: pageNumber
        }
        setIsLoading(true)
        apiCall.get('articles', queriesToSend).then((response) => {
            setArticles((current) => {
                return [...current, ...response.data.articles]
            })
            setTotalArticles(response.data.total_count)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
            setErrorMessage(err.response.data.message)
        })
    }, [pageNumber, queries, sortItemsBy, isAscOrder])

    const sortOptions={
        "Article ID": "article_id",
        "Date": "created_at",
        "Votes": 'votes',
        "Author": 'author',
        "Title": 'title',
        "Topic": 'topic'
    }


    if (errorMessage) {
        return (
            <main>
                <p>{errorMessage}</p>
            </main>
        )
    }

   return (
    <main>
        <p>{queries&&queries.topic_slug}</p>
        <SortBy sortOptions={sortOptions} setSortItemsBy={setSortItemsBy} isAscOrder={isAscOrder} setIsAscOrder={setIsAscOrder}/>
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