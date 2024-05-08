import { Routes, Route } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { SingleArticle } from './SingleArticle';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/article/:article_id" element={<SingleArticle />} />
    </Routes>
  )
}