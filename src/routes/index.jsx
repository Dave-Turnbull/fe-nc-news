import { Routes, Route } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { SingleArticle } from './SingleArticle';
import { TopicPage } from './TopicPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/article/:article_id" element={<SingleArticle />} />
      <Route path="/topics/:topic" element={<TopicPage />} />
    </Routes>
  )
}