const axios = require('axios');

//OpenWeatherMap API
const API_KEY = 'YOUR_APP_ID';
async function getWeather(city) {
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_APP_ID`;

  try {
    const response = await axios.get(endpoint);
    const weatherData = response.data;

    console.log(`地名: ${weatherData.name}`);
    console.log(`天気: ${weatherData.weather[0].description}`);
    console.log(`温度: ${weatherData.main.temp}℃`);
    console.log(`湿度: ${weatherData.main.humidity}%`);
    console.log(`気圧: ${weatherData.main.pressure}hPa`);
  } catch (error) {
    console.error(error);
  }
}

getWeather('Tokyo,jp');
