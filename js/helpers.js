import { cities } from './main.js';
import { city } from './view.js';

export function addCityArray() {
  if (!cities.includes(city.textContent)) {
    cities.push(city.textContent);
  }
}
