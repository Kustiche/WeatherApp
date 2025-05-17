import { callNotification } from './callNotification.js';
import { cities } from './main.js';
import { obtainingInfo } from './obtainingInfo.js';
import { city } from './view.js';

export function addCityArray() {
  if (!cities.includes(city.textContent)) {
    cities.push(city.textContent);
  } else {
    callNotification('Such a city is already in the chosen');
  }

  localStorage.setItem('cities', JSON.stringify(cities));
}

export function obtainingCityName(e) {
  const input = e.target.querySelector('.weather__input');
  const cityName = input.value;

  obtainingInfo(cityName);

  input.value = '';
}
