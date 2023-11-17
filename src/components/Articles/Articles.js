import './Articles.css';
import Card from '../Card/Card';

function Articles({ articles }) {
  // const [search, setSearch] = useState('');

  const articleCards = articles.map(article => {
    const sourceName =
      article.source && article.source.name
        ? article.source.name
        : 'Unknown Source';
    return (
      <Card
        key={article.source.name}
        sourceName={sourceName}
        title={article.title}
        description={article.description}
        image={article.urlToImage}
      />
    );
  });
  return <div className="articles">{articleCards}</div>;
}

export default Articles;
