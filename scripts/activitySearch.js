console.log("activitySearch.js loaded");


// This function is called when the user clicks the search button
/*
This code will get the value of the city input field when the button is clicked, 
and use it to make an HTTP GET request to the specified URL. 
The response from the server will be passed to the response => response.json() function, 
which will parse the response as a JSON object. 
The resulting data will be passed to the data => function, where you can do something with it. 
*/
function searchActivity() {
    console.log("searchActivity() called");

    // Get the value of the input field
    const city = document.getElementById('city').value;

    // Make the HTTP request using the fetch function
    fetch(`https://api.example.com/cities/${city}/activities`)
    .then(response => response.json())
    .then(data => {
        // Do something with the data here
        console.log(data);
        })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });
}