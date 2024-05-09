import { useParams } from 'react-router-dom';
import { RenderArticles } from '../../components/RenderArticles/RenderArticles';

export const TopicPage = () => {
    const {topic} = useParams();

    return (
        <RenderArticles queries={{topic}}/>
    )
}