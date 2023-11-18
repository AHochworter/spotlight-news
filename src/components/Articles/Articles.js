import './Articles.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

function Articles({ articles }) {
  const articleCards = articles.map(article => {
    const sourceName =
      article.source && article.source.name
        ? article.source.name
        : 'Unknown Source';
    const fullDescription = article.description || 'No Write Up Provided';

    return (
      <Link
        to={`/article/${article.title}`}
        key={article.title}
        className="article-link"
      >
        <Card
          sourceName={sourceName}
          title={article.title}
          description={fullDescription}
          urlToImage={article.urlToImage}
        />
      </Link>
    );
  });

  return <div className="articles">{articleCards}</div>;
}

export default Articles;
