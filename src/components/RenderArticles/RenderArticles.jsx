import { useState, useEffect } from 'react'
import { getArticles } from '../../utils/utils'
import { ArticleItem } from './components/ArticleItem/ArticleItem'
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn'
import './RenderArticles.css'

export const RenderArticles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [totalArticles, setTotalArticles] = useState(-1)

    useEffect(() => {
        setIsLoading(true)
        getArticles(setArticles, setTotalArticles, setIsLoading, pageNumber)
    }, [pageNumber])

   return (
    <main>
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