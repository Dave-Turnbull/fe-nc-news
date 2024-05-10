import { Routes, Route, Navigate } from 'react-router-dom';
import { SingleArticle } from './SingleArticle';
import { NotFound } from './NotFound/NotFound';
import { RenderArticles } from '../components/RenderArticles/RenderArticles';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<RenderArticles />} />
      <Route path="/article/:article_id" element={<SingleArticle />} />
      <Route path="/topics/:topic" element={<RenderArticles />} />
      <Route path="/404" element={ <NotFound /> } />
      <Route path="*" element={ <Navigate to="/404" replace />} />
    </Routes>
  )
}