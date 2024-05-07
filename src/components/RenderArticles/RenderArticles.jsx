import { useState, useEffect } from 'react'
import apiCall from '../../hooks/apiCall'
import { ArticleItem } from './components/ArticleItem/ArticleItem'
import './RenderArticles.css'

export const RenderArticles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        apiCall.get('articles').then((response) => {
            setArticles(response.data.articles)
            setIsLoading(false)
        }).catch(err => console.log(err))
    }, [])

    const handleLoadMore = () => {
        setIsLoading(true)
        setPageNumber(curr => ++curr)
        apiCall.get('articles', `?p=${pageNumber}`).then((response) => {
            console.log('loaded')
            setArticles((current) => {
                return [...current, ...response.data.articles]
            })
            setIsLoading(false)
        }).catch(err => console.log(err))
    }

   return (
    <main>
        <ul className='articlesList'>
            {articles.map(article => {
                return <ArticleItem article={article}/>
            })}
        </ul>
        {isLoading?<main>Loading</main>:<button onClick={handleLoadMore}>Load More...</button>}
    </main>
   )
}