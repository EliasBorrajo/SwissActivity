const API_KEY = '6842a7cfc89801efb1369dfdf93e416c';

function onLoad() {
    let searchString = window.location.search;

    let searchParams = new URLSearchParams(searchString);

    let param1 = searchParams.get("param1");

    onPage(param1);
}

function onPage(city) {
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

window.onload = onLoad();