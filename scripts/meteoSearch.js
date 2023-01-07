console.log("meteoSearch.js loaded");

// This function is called when the user clicks the search button
function searchMeteo() {
    console.log("searchMeteo() called");


    // Get the value of the input field
    const city = document.getElementById('city').value;

    let url = 'cityActivity.html';
    let params = {
        param1: city
    };

    let queryString = Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");

    window.location = url + "?" + queryString;
}