import './Articles.css';
import Card from '../Card/Card';

function Articles({ articles }) {
  // const [search, setSearch] = useState('');

  const articleCards = articles.map(article => {
    const sourceName =
      article.source && article.source.name
        ? article.source.name
        : 'Unknown Source';

    const fullDescription = article.description || 'No Write Up Provided';

    return (
      <Card
        key={sourceName}
        sourceName={sourceName}
        title={article.title}
        description={fullDescription}
        urlToImage={article.urlToImage}
      />
    );
  });
  return <div className="articles">{articleCards}</div>;
}

export default Articles;
