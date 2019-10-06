export default{
  search: function(searchTerm, searchLimit, searchsort, ptime){
    console.log('searching....');
      return fetch(`https://www.reddit.com/search.json?q=${searchTerm}&limit=${searchLimit}&sort=${searchsort}`)
      .then( respose => respose.json())
      .then( data =>  data.data.children.map(data => data.data) )
      .catch( err => console.log(err));
  }
  
}