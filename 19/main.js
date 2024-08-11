const apiKey = '8b14c855e1393117250a35390460d350';
const city = 'Kyiv';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=${apiKey}`;

document.getElementById('refresh-button').addEventListener('click', fetchWeatherData);

function fetchWeatherData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const date = new Date();
            document.getElementById('date').textContent = date.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
            document.getElementById('time').textContent = date.toLocaleTimeString('uk-UA');

            document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('feels-like').textContent = `Відчувається як: ${Math.round(data.main.feels_like)}°C`;
            document.getElementById('description').textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('pressure').textContent = data.main.pressure;
            document.getElementById('wind').textContent = `${Math.round(data.wind.speed)} км/год ${getWindDirection(data.wind.deg)}`;
            
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById('weather-icon').src = iconUrl;
        })
        .catch(error => {
            console.error('Помилка завантаження даних:', error);
            alert('Не вдалося завантажити дані про погоду. Спробуйте ще раз.');
        });
}

fetchWeatherData();

function getWindDirection(deg) {
    const directions = ['Пн', 'Пн-Сх', 'Сх', 'Пд-Сх', 'Пд', 'Пд-Зх', 'Зх', 'Пн-Зх'];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
}
