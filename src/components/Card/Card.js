import './Card.css';
import PropTypes from 'prop-types';

function Card({ sourceName, title, urlToImage }) {
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
