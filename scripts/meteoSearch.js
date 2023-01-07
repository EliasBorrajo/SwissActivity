console.log("meteoSearch.js loaded");

// This function is called when the user clicks the search button

const API_KEY = '6842a7cfc89801efb1369dfdf93e416c';


function searchMeteo() {
    console.log("searchMeteo() called");


    // Get the value of the input field
    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        // ici, vous pouvez utiliser les données météo
        console.log(data);
        
        document.getElementById('cityName').innerHTML = data.name;
        document.getElementById('weather-info').innerHTML = data.main.temp;
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });
}

function openPage() {
   // location.assign('cityActivity.html');
}