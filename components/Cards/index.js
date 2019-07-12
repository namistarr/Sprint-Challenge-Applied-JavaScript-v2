// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const articles = response.data.articles;
    const articleTopics = Object.keys(articles);

     articleTopics.map(topic => {
      articles[`${topic}`].map(article => {
        cardsContainer.append(lambdaCards(article));
      });
    });
  })
  .catch(error => {
    console.log('Error', error);
  });

function lambdaCards(data) {
    //create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const byLine = document.createElement('span');

    //set class names
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //set content
   headline.textContent = data.headline;   
   byLine.textContent = data.authorName;
   img.src = data.authorPhoto;

    //put together
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(byLine);
    imgContainer.appendChild(img);

    return card;
}
