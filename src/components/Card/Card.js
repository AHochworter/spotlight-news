import './Card.css';
import PropTypes from 'prop-types';

function Card({ sourceName, title, description, urlToImage }) {
  return (
    <div className="card-container">
      <h2 className="title">{title}</h2>
      <div className="card">
        <div className="card-left">
          <p className="source-name">{sourceName}</p>
          <p className="description">{description}</p>
        </div>
        <div className="image-container-main">
          <img
            src={urlToImage}
            alt="article topic"
            className="article-card-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
