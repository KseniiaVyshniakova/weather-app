function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let currentDate = date.getDate();
  return `${currentDate} ${month} | ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `  
    <div class="col-2">
      <div class="weather-forecast-date">
        ${formatDay(forecastDay.dt)}
      </div>
        <img src="src/img/${forecastDay.weather[0].icon}.svg"
          alt="Clear" 
          width="46px"
          />
        <div class="weather-forecast-temperatures">
        <span class="weather-forecast-temperature-max">
            ${Math.round(forecastDay.temp.max)}°
        </span>
        <span class="weather-forecast-temperature-min"> ${Math.round(
          forecastDay.temp.min
        )}°</span>
                
      </div>
    </div>
    `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "ba5a4a13f31b4068c5d350b0c949065d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  celsiusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("alt", response.data.weather[0].description);

  if (response.data.weather[0].description === "clear sky") {
    iconElement.setAttribute("src", "src/img/01d.svg");
  } else if (response.data.weather[0].description === "few clouds") {
    iconElement.setAttribute("src", "src/img/02d.svg");
  } else if (response.data.weather[0].description === "scattered clouds") {
    iconElement.setAttribute("src", "src/img/03d.svg");
  } else if (response.data.weather[0].description === "broken clouds") {
    iconElement.setAttribute("src", "src/img/04d.svg");
  } else if (response.data.weather[0].description === "overcast clouds") {
    iconElement.setAttribute("src", "src/img/04d.svg");
  } else if (response.data.weather[0].description === "light rain") {
    iconElement.setAttribute("src", "src/img/10d.svg");
  } else if (response.data.weather[0].description === "rain") {
    iconElement.setAttribute("src", "src/img/10d.svg");
  } else if (response.data.weather[0].description === "moderate rain") {
    iconElement.setAttribute("src", "src/img/09d.svg");
  } else if (response.data.weather[0].description === "heavy intensity rain") {
    iconElement.setAttribute("src", "src/img/09d.svg");
  } else if (response.data.weather[0].description === "thunderstorm") {
    iconElement.setAttribute("src", "src/img/11d.svg");
  } else if (
    response.data.weather[0].description === "thunderstorm with light rain"
  ) {
    iconElement.setAttribute("src", "src/img/12d.svg");
  } else if (
    response.data.weather[0].description === "thunderstorm with rain"
  ) {
    iconElement.setAttribute("src", "src/img/12d.svg");
  } else if (response.data.weather[0].description === "snow") {
    iconElement.setAttribute("src", "src/img/13d.svg");
  } else if (response.data.weather[0].description === "mist") {
    iconElement.setAttribute("src", "src/img/50d.svg");
  } else if (response.data.weather[0].description === "haze") {
    iconElement.setAttribute("src", "src/img/50d.svg");
  }

  let date = new Date(response.data.dt * 1000);
  let hours = date.getHours();
  if (
    (response.data.weather[0].description === "clear sky") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/01n.svg");
  } else if (
    (response.data.weather[0].description === "clear") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/01n.svg");
  } else if (
    (response.data.weather[0].description === "few clouds") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/02n.svg");
  } else if (
    (response.data.weather[0].description === "scattered clouds") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/03n.svg");
  } else if (
    (response.data.weather[0].description === "broken clouds") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/04n.svg");
  } else if (
    (response.data.weather[0].description === "overcast clouds") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/04n.svg");
  } else if (
    (response.data.weather[0].description === "shower rain") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/09n.svg");
  } else if (
    (response.data.weather[0].description === "rain") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/10n.svg");
  } else if (
    (response.data.weather[0].description === "moderate rain") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/09n.svg");
  } else if (
    (response.data.weather[0].description === "heavy intensity rain") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/09n.svg");
  } else if (
    (response.data.weather[0].description === "light rain") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/10n.svg");
  } else if (
    (response.data.weather[0].description === "thunderstorm") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/11n.svg");
  } else if (
    (response.data.weather[0].description === "thunderstorm with light rain") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/12n.svg");
  } else if (
    (response.data.weather[0].description === "thunderstorm with rain") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/12n.svg");
  } else if (
    (response.data.weather[0].description === "snow") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/13n.svg");
  } else if (
    (response.data.weather[0].description === "mist") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/50n.svg");
  } else if (
    (response.data.weather[0].description === "haze") &
    (hours > 20 || hours < 4)
  ) {
    iconElement.setAttribute("src", "src/img/50n.svg");
  }
  getForecast(response.data.coord);
}

function search(city) {
  let apiKey = "ba5a4a13f31b4068c5d350b0c949065d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function searchLocation(position) {
  let apiKey = "ba5a4a13f31b4068c5d350b0c949065d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

// function displayFahrenheitTemperature(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   celsiusLink.classList.remove("active");
//   fahrenheitLink.classList.add("active");
//   let fahrenheitTemperarture = (celsiusTemperature * 9) / 5 + 32;
//   temperatureElement.innerHTML = Math.round(fahrenheitTemperarture);
// }

// function displayCelsiusTemperature(event) {
//   event.preventDefault();
//   celsiusLink.classList.add("active");
//   fahrenheitLink.classList.remove("active");
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = Math.round(celsiusTemperature);
// }

// let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Kyiv");
