import { useState } from 'react';
import './Articles.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import PropTypes from 'prop-types';

function Articles({ articles }) {
  const [search, setSearch] = useState('');

  const handleSearchChange = newSearch => {
    setSearch(newSearch);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const articleCards = filteredArticles.map(article => {
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
          className="card-details"
          sourceName={sourceName}
          title={article.title}
          description={fullDescription}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
        />
      </Link>
    );
  });

  return (
    <div className="articles-container">
      <div className="search-container">
        <Form
          className="search-bar"
          search={search}
          onSearchChange={handleSearchChange}
        />
      </div>
      <div className="article-cards">{articleCards}</div>
    </div>
  );
}

export default Articles;

Articles.propTypes = {
  sourceName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
