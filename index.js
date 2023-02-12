const https = require('https');

//OpenWeatherMap API
const API_KEY = 'YOUR_APP_ID';

process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log('地名を入力:');

process.stdin.on('data', function (cityName) {
  const encodedCityName = encodeURIComponent(cityName.trim());

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCityName}&appid=${API_KEY}`;

  https
    .get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const weatherData = JSON.parse(data);
        console.log(`${cityName}:`);
        console.log(`気温: ${weatherData.main.temp}`);
        console.log(`湿度: ${weatherData.main.humidity}%`);
        console.log(`気圧: ${weatherData.main.pressure} hPa`);
        console.log(`天気: ${weatherData.weather[0].description}`);
      });
    })
    .on('error', (error) => {
      console.error(`${error.message}`);
    });
});
