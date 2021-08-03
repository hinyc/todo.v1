const API_KEY = "a2a90d2d81d227e6be8429b2170d6134";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

weather.innerText = `- ℃, - / `;
city.innerText = `--`;

function onGeoOk(data) {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.main.temp} ℃, ${data.weather[0].main} / `;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
