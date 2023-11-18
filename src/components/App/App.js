import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import SelectedArticleContainer from '../SelectedArticleContainer/SelectedArticleContainer';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function App() {
  const dummyData = [
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Clare Foran, Marshall Cohen, Melanie Zanona, Annie Grayer',
      title:
        'George Santos announces he won’t seek reelection following damning Ethics Committee report - CNN',
      description:
        'The House Ethics Committee released its long-awaited report on the investigation into GOP Rep. George Santos on Thursday, concluding that there is “substantial evidence” that the congressman used campaign funds for personal purposes.',
      url: 'https://www.cnn.com/2023/11/16/politics/ethics-committee-releases-santos-report/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/ap23284569917738.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-11-16T22:33:00Z',
      content:
        'Republican Rep. George Santos announced he will not seek reelection to the House next year, following the Ethics Committees release of a long-awaited report on Thursday, which concluded that there is… [+8726 chars]',
    },
    {
      source: {
        id: null,
        name: 'CNET',
      },
      author: null,
      title: "Apple's Bringing RCS Support to iPhone Next Year - CNET",
      description:
        'Apple is adopting the texting standard and it will work alongside iMessage, a company spokesperson told 9to5Mac.',
      url: 'https://www.cnet.com/tech/mobile/apple-bringing-rcs-support-to-iphone-next-year/',
      urlToImage:
        'https://www.cnet.com/a/img/resize/e984bdaf09752b10d89f4d6a8fd35c830ed0e812/hub/2023/11/16/0c109e61-5c96-4f2b-8484-e04067a175ed/blue-green-iphone-android-text-message-bubbles-4906-2.jpg?auto=webp&fit=crop&height=675&width=1200',
      publishedAt: '2023-11-16T22:17:00Z',
      content:
        'Apple could be making a big step toward improving texting between iPhone and Android devices by adopting the Rich Communication Services standard in 2024. \r\nAccording to 9to5Mac on Thursday, an Apple… [+2166 chars]',
    },
    {
      source: {
        id: null,
        name: 'Umn.edu',
      },
      author: null,
      title:
        'New data provide a boost for shorter drug-resistant TB regimens - University of Minnesota Twin Cities',
      description: null,
      url: 'https://www.cidrap.umn.edu/antimicrobial-stewardship/new-data-provide-boost-shorter-drug-resistant-tb-regimens',
      urlToImage:
        'https://www.cidrap.umn.edu/sites/default/files/styles/layout_large/public/article/50651348177_79dd537f1a_k.jpg?itok=J0MPlONy',
      publishedAt: '2023-11-16T21:42:54Z',
      content: null,
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Jeffrey Kopp, Veronica  Miracle, Piper HudspethBlackburn',
      title: 'David DePape found guilty in Paul Pelosi hammer attack - CNN',
      description:
        'A jury has found David DePape guilty on two counts in the violent attack on Paul Pelosi, the husband of former House Speaker Nancy Pelosi, last year in the couple’s San Francisco home.',
      url: 'https://www.cnn.com/2023/11/16/politics/depape-verdict-guilty/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/231114132407-david-depape-file-2013.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-11-16T21:18:00Z',
      content:
        'A jury has found David DePape guilty on two counts in the violent attack on Paul Pelosi, the husband of former House Speaker Nancy Pelosi, last year in the couples San Francisco home.\r\nDePape was con… [+3858 chars]',
    },
    {
      source: {
        id: 'espn',
        name: 'ESPN',
      },
      author: 'Heather Dinich',
      title:
        "Michigan's Jim Harbaugh accepts Big Ten's 3-game suspension - ESPN",
      description:
        "Michigan coach Jim Harbaugh will accept a three-game suspension from the Big Ten and the conference will end its investigation into a sign-stealing scheme as part of an agreement to resolve the school's lawsuit against the league.",
      url: 'https://www.espn.com/college-football/story/_/id/38914714/michigan-jim-harbaugh-accepts-big-ten-3-game-suspension',
      urlToImage:
        'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1108%2Fr1250252_1296x729_16%2D9.jpg',
      publishedAt: '2023-11-16T20:39:00Z',
      content:
        "Michigan and coach Jim Harbaugh have agreed to the Big Ten's three-game suspension of the Wolverines coach, the school announced Thursday, which means Harbaugh will not coach Saturday at Maryland or … [+3158 chars]",
    },
  ];

  const [articles, setArticles] = useState(dummyData);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <Header className="header" />
      {error ? (
        <div className="app-error-container">
          <ErrorComponent
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
            element={<SelectedArticleContainer articles={articles} />}
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
    </div>
  );
}

export default App;
