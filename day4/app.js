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

const pickSource = document.getElementById('pickSource');
const articleSection = document.getElementById('articleSection');
const newsArray = news.articles;
const sourceArray = sources.sources;

listNews(newsArray);

// Create Drop Down Items
const newsSources = sourceArray.map((source) => {
  const newsSource = `
    <option value="all">View All Articles</option>
    <option value = "${source.name}">${source.name}</option>
  `;
  return newsSource;
});
pickSource.innerHTML = newsSources.join('');

const sourceNames = sourceArray.map((source) => {
  const sourceName = source.name;
  return sourceName;
});
