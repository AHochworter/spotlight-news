import './Card.css';
import PropTypes from 'prop-types';

function Card({ sourceName, title, urlToImage, publishedAt }) {
  // Format the date -> help from Chat-GPT
  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Example format: November 21, 2023
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card-container">
      <div className="card" key={title}>
        <h2 className="source-name">{sourceName}</h2>
        <div className="image-container">
          <img
            src={urlToImage}
            alt="article topic"
            className="article-card-img"
          />
        </div>
        <div className="info-container">
          <h3 className="title">{title}</h3>
          <p className="printed-on">{formatDate(publishedAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  sourceName: PropTypes.string,
  title: PropTypes.string,
  urlToImage: PropTypes.string,
};
