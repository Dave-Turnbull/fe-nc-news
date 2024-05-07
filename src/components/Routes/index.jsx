import { Routes, Route } from 'react-router-dom';
import { RenderArticles } from './RenderArticles';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<RenderArticles />} />
    </Routes>
  )
}