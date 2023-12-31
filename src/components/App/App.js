import { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Articles from '../Articles/Articles';
import SelectedArticleContainer from '../SelectedArticleContainer/SelectedArticleContainer';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then(data => {
        console.log('Received data', data);

        const articlesWithImage = data.articles.filter(
          article => article.urlToImage
        );
        setArticles(articlesWithImage);
      })

      .catch(error => {
        setError('Error fetching articles.');
      });
  }, []);

  return (
    <div className="App">
      <Header className="header" />
      {error ? (
        <div className="app-error-container">
          <ErrorComponent
            className="error-component"
            error={error}
            message="Apologies, we're having trouble loading the page. Please try again later."
          />
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Articles className="articles" articles={articles} />}
          />
          <Route
            path="/article/:title"
            element={
              <SelectedArticleContainer
                className="selected-article"
                articles={articles}
              />
            }
          />
          <Route
            path="*"
            element={
              <ErrorComponent
                error={error}
                message="Apologies, we can't find the requested page. Please hit the 'Home' button above."
              />
            }
          />
        </Routes>
      )}
      <Footer className="footer" />
    </div>
  );
}

export default App;
