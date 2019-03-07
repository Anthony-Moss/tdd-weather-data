
// Implement the following functions to fulfill the tests!
function getLocationName(atlweather) {
    return (atlweather['name']);
}

function getLocationCountry(atlweather) {
    return (atlWeather['sys']['country'])
}

function getTemperature(atlWeather) {
    tempKelvin = (atlWeather['main']['temp']);
    tempFahrenheit = ((tempKelvin - 273.15) * (9/5) + 32);
    return Math.round(tempFahrenheit);
}
function getLocationLatitude() {}
function getLocationLongitude() {}
function getDescription() {}
function getWindSpeed(atlweather) {
    return (atlWeather["wind"]["speed"]);
}
function getSunrise() {}


// const nameDiv = document.createElement('div');
// nameDiv.textContent = (`The name of the city is ${getLocationName(atlWeather)}.`);

// const temperatureDiv = document.createElement('div');
// temperatureDiv.textContent = (`It is ${getTemperature(atlWeather)} degrees Fahrenheit.`);

// const windDiv = document.createElement('div');
// windDiv.textContent = (`The wind speed is ${getWindSpeed(atlWeather)}.`)

const weatherInfo = [
    (`The name of the city is ${getLocationName(atlWeather)}.`),
    (`It is ${getTemperature(atlWeather)} degrees Fahrenheit.`),
    (`The wind speed is ${getWindSpeed(atlWeather)}.`),
]

const weatherElement = document.querySelector('[data-weather]');

weatherInfo.forEach(function (info) {
    const newAnchor = document.createElement('div')
    newAnchor.textContent = info;
    weatherElement.append(newAnchor);
});


const body = document.querySelector('body');
// body.appendChild(nameDiv);
// body.appendChild(temperatureDiv);
// body.appendChild(windDiv);
body.appendChild(weatherElement);


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