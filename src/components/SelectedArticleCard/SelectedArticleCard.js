import './SelectedArticleCard.css';

function SelectedArticleCard({
  title,
  description,
  urlToImage,
  publishedAt,
  url,
}) {
  return (
    <div className="selected-article-card">
      <div className="article-left">
        <h2 className="selected-article-title">{title}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="image-container-selected">
        <img
          src={urlToImage}
          alt="selected article topic"
          className="selected-card-img"
        />
        <p className="published-at">{publishedAt}</p>
        <p className="link-to-article">{url}</p>
      </div>
    </div>
  );
}

export default SelectedArticleCard;
