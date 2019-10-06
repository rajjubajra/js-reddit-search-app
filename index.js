import reddit from './redditapi';



//ui select
const searchForm = document.querySelector('#search-form');




// on submit run search
searchForm.addEventListener('submit', (e) => {

  const searchTerm = document.querySelector('#search-term').value;
  const searchLimit = document.querySelector('#search-limit').value;
  const searchSort = document.querySelector('input[name="sortby"]:checked').value;
  
  
  //alert if search term is empty
  if(searchTerm === ''){
    showMessage('Please enter search term', 'alert alert-danger');
  }


  //run search function
  reddit.search(searchTerm, searchLimit, searchSort)
  .then(result => {
    console.log(result);
    let output = '';

    result.forEach(function(post){

      
   
      let image = post.preview 
                  ? `<img src="${post.preview.images[0].source.url}" class="card-img-top" alt="reddit search image">`
                  : '';

      let d = new Date(post.created);
      let created = `${d.getFullYear()}.${d.getMonth()}.${d.getDate()}`;
  
      output += `
      <div class="card-column">
        <div class="card mb-3">
            ${image}
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${truncateText(post.selftext, 150)}</p>
              <a href="${post.url}" class="btn btn-outline-secondary" target="_blank">Read more</a>
              <hr />
              
            </div>
        </div>
      </div>  
    `;
    
   
    })
    document.getElementById('result').innerHTML = output;
  
  })
  
  
  e.preventDefault();
})



//show alert message
function showMessage(message, className){
  console.log('alert run');
  //create div element
  const div = document.createElement('div');
  //add class to div element
  div.className = `alert ${className}`
  //append message in to the div element
  div.appendChild(document.createTextNode(message));

  //ui to insert message after serch-form 
  const searchBox = document.querySelector("#search-box");
  //insert message inside search-container before search-form
  searchForm.insertBefore(div, searchBox);

  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000)
}


//trunkcate text
function truncateText(text, count){
  let shortText = text.indexOf('', count);
  if(shortText == -1) return text;
  return text.substring(0, shortText);
}

//image insert
function insertImage(image){
  return image ? `<img src="${image}" class="card-img-top" alt="reddit search image">`: '';
}