import './SelectedArticleCard.css';

function SelectedArticleCard({
  title,
  description,
  urlToImage,
  publishedAt,
  url,
}) {
  console.log('url', url);
  return (
    <div className="selected-article-wrapper">
      <div className="selected-article">
        <div className="image-container-selected">
          <img
            src={urlToImage}
            alt="selected article topic"
            className="selected-card-img"
          />
        </div>
        <div className="title-wrapper">
          <h2 className="selected-article-title">{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="selected-card-details">
        <p className="published-at">Article Published: {publishedAt}</p>
        <a href={url} className="link-to-full-article">
          Link to Full Article
        </a>
      </div>
    </div>
  );
}

export default SelectedArticleCard;
