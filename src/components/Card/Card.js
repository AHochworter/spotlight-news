import './Card.css';
import PropTypes from 'prop-types';

function Card({ sourceName, title, description, urlToImage }) {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        {/* <p className="source-id">{source.id}</p> */}
        <p className="source-name">{sourceName}</p>
        <div className="image-container-main">
          <img
            src={urlToImage}
            alt="topic image"
            className="article-card-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};
