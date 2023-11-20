export function getArticles() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

  console.log('Fetching articles...');

  return fetch(url, {
    method: 'GET',
  }).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}
