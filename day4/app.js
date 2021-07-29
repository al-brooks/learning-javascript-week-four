// function for displaying news articles
function listNews(articleArray) {
  const articlesList = articleArray.map((article) => {
    const articleItem = `
              <article class = "article">
                  <div class = "articleContent">
                      <summary class="articleSummary">
                          <span class="articleTitle"><a href = "${article.url}">${article.title}</a></span>
                          <span class="articleDescription">${article.description}</span>
                          <span class="articleAuthor">${article.author}</span>
                      </summary>
                      <img class="articleImage" src="${article.urlToImage}" alt="" />
                  </div>
                  <span class="articlePublished">Published At ${article.publishedAt}</span>
              </article>
          `;
    return articleItem;
  });

  articleSection.innerHTML = articlesList.join('');
}

// declaring vars for HTML content
const pickSource = document.getElementById('pickSource');
const articleSection = document.getElementById('articleSection');

// creating array for news articles
const newsArray = news.articles;

// create HTML drop down items - based on sources js file
const sourceArray = sources.sources;
const newsSources = sourceArray.map((source) => {
  const newsSource = `
      <option value = "${source.name}">${source.name}</option>
    `;
  return newsSource;
});
pickSource.insertAdjacentHTML('beforeend', newsSources);

// initial page load - display all news
listNews(newsArray);

// future event updates based on sources
pickSource.addEventListener('change', function () {
  const selectedSource = pickSource.value;

  if (selectedSource === 'all') {
    listNews(newsArray);
  } else {
    const filteredNews = newsArray.filter(
      (article) => article.source.name === selectedSource
    );
    listNews(filteredNews);
  }
});

// Below map is to pull news file source names to verify test cases
// const articleSources = newsArray.map((article) => {
//   const sourceName = article.source.name;
//   return sourceName;
// });
