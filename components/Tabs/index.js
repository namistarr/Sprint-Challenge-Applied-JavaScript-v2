// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>





axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    const allTopics = document.querySelector('.topics');
    
    return response.data.topics.map(topic => {
        return allTopics.appendChild(lambdaTabs(topic));
        });      
    })
  .catch(error => {
    console.log('Error', error);
  });

function lambdaTabs(topic) {
    //create elements
    const tab = document.createElement('div');

    //set class names
    tab.classList.add('tab');

    //set content
    tab.textContent = topic;

    return tab;
}