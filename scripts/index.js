
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

function getLocationCountry(noReallyTheWeatherData) {
    return (noReallyTheWeatherData['sys']['country'])
}

function getTemperature(noReallyTheWeatherData) {
    tempKelvin = (noReallyTheWeatherData['main']['temp']);
    tempFahrenheit = ((tempKelvin - 273.15) * (9/5) + 32);
    return Math.round(tempFahrenheit);
}
function getLocationLatitude() {}
function getLocationLongitude() {}
function getDescription() {}

function getWindSpeed(noReallyTheWeatherData) {
    return (noReallyTheWeatherData["wind"]["speed"]);
}
function getSunrise() {}

// Add icon to weather div
function addIcon(object) {
    // get icon code from object
    const iconCode = object.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const newIcon = document.createElement('img');
    newIcon.setAttribute('src', iconUrl);
    newIcon.classList.add('conditions');

    const conditionsText = document.createElement('h2');
    conditionsText.classList.add('conditions');
    conditionsText.textContent = 'Current conditions: '

    weatherDiv.append(conditionsText);
    weatherDiv.append(newIcon);

}
// adds whatever data is passed to the weather div
function addToWeather(data) {
    const newData = document.createElement('h2');
    newData.textContent = data;

    weatherDiv.append(newData);
}

// creates map showing lat long of weather info
function addMap(object) {
    // get lat and long coordinates
    const lat = object.coord.lat;
    const lon = object.coord.lon;

    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;

    // create iframe and set attributes
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', mapUrl);
    iframe.setAttribute('width', '360');
    iframe.setAttribute('height', '270');
    iframe.setAttribute('frameborder', '0');

    weatherDiv.append(iframe);


}

function sunInfo(object, timeOfDay) {

    // get sunrise and sunset info
    const timeData = object.sys[timeOfDay];

    // convert to standard date format
    const sunriseTime = new Date(timeData * 1000);

    return sunriseTime;

}

// add correctly formatted dates to the page
function formatDate(date) {
    const day = date.getDate();
    // month starts at 0
    const month = date.getMonth() + 1;
    console.log(month);
    const hours = date.getHours();
    let minutes =  date.getMinutes();

    // if statement to reformat minutes
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    const seconds = date.getSeconds();

    const formatted = `${hours}:${minutes}:${seconds}`;
    const monthDayYear = `${month}/${day}/2019`;


    return monthDayYear + ' ' + formatted;
}


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