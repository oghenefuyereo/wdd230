function getWeather2(latitude2, longitude2) {
    const apiKey2 = '8c69e35966006ee4625d59e5f1bed11f';

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude2}&lon=${longitude2}&appid=${apiKey2}&units=metric`)
        .then(response2 => {
            if (!response2.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response2.json();
        })
        .then(data2 => {
            displayWeather2(data2);
        })
        .catch(error2 => {
            console.error('Error:', error2);
            alert('Failed to fetch weather data. Please try again later.');
        });
}

function displayWeather2(data2) {
    const weatherInfo2 = `
        <strong>Weather in ${data2.name}, ${data2.sys.country}</strong><br>
        Condition: ${data2.weather[0].description}, Temperature: ${data2.main.temp}°C<br>
        Wind Speed: ${data2.wind.speed} m/s, Pressure: ${data2.main.pressure} hPa, Humidity: ${data2.main.humidity}%
    `;

    const paragraph2 = document.querySelector('section p');
    paragraph2.innerHTML = weatherInfo2;
}

function getLocation2() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position2 => {
            const latitude2 = position2.coords.latitude;
            const longitude2 = position2.coords.longitude;
            getWeather2(latitude2, longitude2);
        }, error2 => {
            console.error('Error getting location:', error2);
            alert('Failed to get your location. Please allow location access.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

window.onload = getLocation2;
