console.log("activitySearch.js loaded");


// This function is called when the user clicks the search button
function searchActivity() {
    var searchCriteria = document.getElementById("city").value;
    fetch('https://opendata.myswitzerland.io/v1/destinations?query=Lausanne', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'x-api-key': 'AlQbq7i0XYQXiSz2i0Gn1ibEqCQfasT9UyP9Xhdd'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}