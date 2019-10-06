import reddit from './reddit';
//ui select
const searchForm = document.querySelector('#search-form');

// on submit run search
searchForm.addEventListener('submit', (e) => {

  const inputSearch = document.querySelector('#search').value;
  const limit = document.querySelector('#limit').value;
  const sort = document.querySelector('input[name="sortby"]:checked').value;
  
  //alert if search term is empty
  if(inputSearch === ''){
    showMessage('Please enter search term', 'alert alert-danger');
  }

  inputSearch.value = '';

  reddit.search(inputSearch, sort, limit);
  
  e.preventDefault();
})


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
