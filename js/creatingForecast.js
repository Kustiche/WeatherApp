import { forecastCard, forecastInnerCards } from './view.js';

export function creatingForecast(data) {
  forecastInnerCards.innerHTML = '';

  data.list.forEach((forecast) => {
    const {
      dt,
      main: { temp, feels_like },
      weather: [weatherArray],
    } = forecast;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date(dt * 1000);
    const day = date.getDate();
    const numberMonth = date.getMonth();
    const time = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }`;

    const card = forecastCard.content.cloneNode(true);
    const dateForecast = card.querySelector('.forecast__subtitle');
    const textForecast = card.querySelectorAll('.forecast__text');
    const timeForecast = card.querySelector('.forecast__time');
    const nameWeatherForecast = card.querySelector('.forecast__name-weather');
    const img = card.querySelector('.forecast__img');

    dateForecast.textContent = `${day} ${months[numberMonth]}`;
    timeForecast.textContent = time;
    nameWeatherForecast.textContent = weatherArray.main;
    textForecast.forEach((el) => {
      if (el.dataset.forecast === 'Now') {
        el.textContent = `Temperature: ${Math.round(temp)}\°`;
      } else if (el.dataset.forecast === 'Feels') {
        el.textContent = `Feels like: ${Math.round(feels_like)}\°`;
      }
    });
    img.src = `https://openweathermap.org/img/wn/${weatherArray.icon}@2x.png`;

    forecastInnerCards.append(card);
  });
}
