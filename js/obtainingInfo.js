import { callNotification } from './callNotification.js';
import { creatingForecast } from './creatingForecast.js';
import { distributionInfo } from './distributionInfo.js';
import { errorMessage } from './main.js';

export function obtainingInfo(cityName) {
  const apiKey = 'e3ad590851a41683e0cf38cebb1b8c98';

  const serverUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const url = `${serverUrl}q=${cityName}&appid=${apiKey}&units=metric`;

  const serverUrlHourly = 'https://api.openweathermap.org/data/2.5/forecast?';
  const urlHourly = `${serverUrlHourly}q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      const isError = data.cod === '404';

      if (isError) {
        throw errorMessage;
      }

      distributionInfo(data);
    })
    .catch((err) => {
      callNotification(`${err.name}${err.message}`);
    });

  fetch(urlHourly)
    .then((response) => response.json())
    .then((data) => {
      const isError = data.cod === '404';

      if (isError) {
        throw errorMessage;
      }

      creatingForecast(data);
    })
    .catch(() => {
      return;
    });

  localStorage.removeItem('inputText');
}
