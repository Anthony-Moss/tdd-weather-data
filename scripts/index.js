
// Implement the following functions to fulfill the tests!
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&appid=480f3b49133aec8af4ff0b38c34ef12c";
fetch(URL)
.then( function (response) {
    return response.json()
}).then(function (weatherData) {
    return weatherData;
}).then(function (noReallyTheWeatherData) {

function getLocationName(noReallyTheWeatherData) {
    return (noReallyTheWeatherData['name']);
}

// function getLocationCountry(noReallyTheWeatherData) {
//     return (noReallyTheWeatherData['sys']['country'])
// }

function getTemperature(noReallyTheWeatherData) {
    tempKelvin = (noReallyTheWeatherData['main']['temp']);
    tempFahrenheit = ((tempKelvin - 273.15) * (9/5) + 32);
    return Math.round(tempFahrenheit);
}
// function getLocationLatitude() {}
// function getLocationLongitude() {}
// function getDescription() {}

function getWindSpeed(noReallyTheWeatherData) {
    return (noReallyTheWeatherData["wind"]["speed"]);
}
// function getSunrise() {}

const weatherElement = document.querySelector('[data-weather]');

const body = document.querySelector('body');

body.appendChild(weatherElement);

const weatherInfo = [
    (`The name of the city is ${getLocationName(noReallyTheWeatherData)}.`),
    (`It is ${getTemperature(noReallyTheWeatherData)} degrees Fahrenheit.`),
    (`The wind speed is ${getWindSpeed(noReallyTheWeatherData)}.`),
]



weatherInfo.forEach(function (info) {
    const weatherElement = document.querySelector("[data-weather]")
    const newAnchor = document.createElement('div')
    newAnchor.textContent = info;
    weatherElement.append(newAnchor);
});
})



// Please ignore the following
try {
    module.exports = {
        getLocationName,
        getLocationCountry,
        getLocationLatitude,
        getLocationLongitude,
        getDescription,
        getWindSpeed,
        getSunrise
    }
} catch (e) {
    
}