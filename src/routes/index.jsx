import { Routes, Route } from 'react-router-dom';
import { ArticleList } from './ArticleList';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
    </Routes>
  )
}