const API_KEY = "ce0aedd6975a64229e92137c61a48a2c";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const temperation = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      temperation.innerText = `${data.main.temp}도`;
      city.innerText = data.name;
    });
}

function onGeoError() {}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
