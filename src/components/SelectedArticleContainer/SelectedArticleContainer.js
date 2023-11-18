import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SelectedArticleContainer.css';
import SelectedArticleCard from '../SelectedArticleCard/SelectedArticleCard';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function SelectedArticleContainer({ articles }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedArticleError, setSelectedArticleError] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    try {
      const foundArticle = articles.find(article => article.title === title);

      if (foundArticle) {
        setSelectedArticle(foundArticle);
      } else {
        throw new Error('Article not found');
      }
    } catch (error) {
      setSelectedArticleError(error);
    }
  }, [title, articles]);
  return (
    <div className="selected-article-container">
      {selectedArticleError ? (
        <ErrorComponent
          error={selectedArticleError}
          message="We're sorry, we're experiencing a server error. Please try again later"
        />
      ) : selectedArticle ? (
        <SelectedArticleCard
          title={selectedArticle.title}
          content={selectedArticle.content}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SelectedArticleContainer;
