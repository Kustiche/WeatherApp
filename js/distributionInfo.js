import { city, deegres, subtitleDetails } from './view.js';

export function distributionInfo(data) {
  const {
    name,
    wind: { speed },
    main: { feels_like, temp, humidity },
    sys: { sunrise, sunset },
  } = data;

  const dateSunrise = new Date(sunrise * 1000);
  const dateSunset = new Date(sunset * 1000);

  const timeSunrise = `${dateSunrise.getHours() < 10 ? '0' + dateSunrise.getHours() : dateSunrise.getHours()}:${
    dateSunrise.getMinutes() < 10 ? '0' + dateSunrise.getMinutes() : dateSunrise.getMinutes()
  }`;
  const timeSunset = `${dateSunset.getHours() < 10 ? '0' + dateSunset.getHours() : dateSunset.getHours()}:${
    dateSunset.getMinutes() < 10 ? '0' + dateSunset.getMinutes() : dateSunset.getMinutes()
  }`;

  city.textContent = name;

  deegres.forEach((el) => {
    if (el.dataset.weather === 'Now') {
      el.textContent = `${Math.round(temp)}\°`;
    } else if (el.dataset.weather === 'Feels') {
      el.textContent = `${Math.round(feels_like)}\°`;
    }
  });

  subtitleDetails.forEach((el) => {
    if (el.dataset.details === 'Wind') {
      el.textContent = `${Math.round(speed)}km/h`;
    } else if (el.dataset.details === 'Humidity') {
      el.textContent = `${humidity}%`;
    } else if (el.dataset.details === 'Sunrise') {
      el.textContent = timeSunrise;
    } else if (el.dataset.details === 'Sunset') {
      el.textContent = timeSunset;
    }
  });
}
