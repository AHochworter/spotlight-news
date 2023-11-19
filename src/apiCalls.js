export function getArticles() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;
  return fetch(url, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  }).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
  // .then(data => console.log(data))
  // .catch(error => console.error('There has been a problem with your fetch'));
}
