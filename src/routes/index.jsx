import { Routes, Route, Navigate } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { SingleArticle } from './SingleArticle';
import { TopicPage } from './TopicPage';
import { NotFound } from './NotFound/NotFound';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/article/:article_id" element={<SingleArticle />} />
      <Route path="/topics/:topic" element={<TopicPage />} />
      <Route path="/404" element={ <NotFound /> } />
      <Route path="*" element={ <Navigate to="/404" replace />} />
    </Routes>
  )
}