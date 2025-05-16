import { creatingForecast } from './creatingForecast.js';
import { distributionInfo } from './distributionInfo.js';

export function obtainingInfo(e) {
  const input = e.target.querySelector('.weather__input');
  const cityName = input.value;
  const apiKey = 'e3ad590851a41683e0cf38cebb1b8c98';

  const serverUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const url = `${serverUrl}q=${cityName}&appid=${apiKey}&units=metric`;

  const serverUrlHourly = 'https://api.openweathermap.org/data/2.5/forecast?';
  const urlHourly = `${serverUrlHourly}q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      distributionInfo(data);
    });

  fetch(urlHourly)
    .then((response) => response.json())
    .then((data) => creatingForecast(data));

  input.value = '';
}
