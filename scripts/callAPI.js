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
        let iconId = data.weather[0].icon;
        getWeatherIcon(iconId);
        
        document.getElementById('cityName').innerHTML = data.name;
        document.getElementById('weather-info').innerHTML = data.main.temp;
        document.getElementById('weather-info').append(' °C');
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });
}

// Fonction qui récupère l'icône météo à partir de l'ID de l'icône
async function getWeatherIcon(iconId) {
    // Génère l'URL de l'icône en utilisant l'ID de l'icône
    const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  
    // Télécharge l'icône à partir de l'URL générée
    const response = await fetch(iconUrl);
  
    // Vérifie si le téléchargement a réussi
    if (response.ok) {
      // Si oui, retourne l'URL de l'icône
      document.getElementById('weatherIcon').src = iconUrl;
      return iconUrl;
    } else {
      // Si non, affiche un message d'erreur et retourne une valeur vide
      console.error(`Erreur lors du téléchargement de l'icône météo : ${response.status} ${response.statusText}`);
      return "";
    }
  }

window.onload = onLoad();