import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SelectedArticleContainer.css';
import SelectedArticleCard from '../SelectedArticleCard/SelectedArticleCard';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import PropTypes from 'prop-types';

function SelectedArticleContainer({ articles }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedArticleError, setSelectedArticleError] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    // function to handle article finding logic
    const findArticle = async () => {
      try {
        const foundArticle = articles.find(article => article.title === title);

        if (foundArticle) {
          setSelectedArticle(foundArticle);
        } else {
          throw new Error('Article not found');
        }
      } catch (error) {
        // Set the error message instead of the error object
        setSelectedArticleError(error.message);
      }
    };

    // Call the findArticle function
    findArticle();
  }, [title, articles]);

  return (
    <div className="selected-article-view">
      <div className="selected-article-container">
        {selectedArticleError ? (
          <ErrorComponent
            error={selectedArticleError}
            message="We're sorry, we're experiencing a server error. Please try again later"
          />
        ) : selectedArticle ? (
          <SelectedArticleCard
            title={selectedArticle.title}
            description={selectedArticle.description}
            urlToImage={selectedArticle.urlToImage}
            publishedAt={selectedArticle.publishedAt}
            url={selectedArticle.url}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default SelectedArticleContainer;

SelectedArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};
