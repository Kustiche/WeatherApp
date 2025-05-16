import { forecastCard, forecastInnerCards } from './view.js';

export function creatingForecast(data) {
  forecastInnerCards.innerHTML = '';

  data.list.forEach((forecast) => {
    console.log(forecast);

    const {
      dt,
      main: { temp, feels_like },
      weather: [weatherArray],
    } = forecast;

    const card = forecastCard.content.cloneNode(true);
    const dateForecast = card.querySelector('.forecast__subtitle');
    const textForecast = card.querySelectorAll('.forecast__text');
    const timeForecast = card.querySelector('.forecast__time');
    const nameWeatherForecast = card.querySelector('.forecast__name-weather');

    nameWeatherForecast.textContent = weatherArray.main;

    forecastInnerCards.append(card);
  });
}
