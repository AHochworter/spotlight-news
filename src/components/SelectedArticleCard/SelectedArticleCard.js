import './SelectedArticleCard.css';

function SelectedArticleCard({ title, content }) {
  return (
    <div className="selected-article-card">
      <h2>SELECTED ARTICLE DETAILS</h2>
      <div className="article-left">
        <h2 className="selected-article-title">{title}</h2>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}

export default SelectedArticleCard;
