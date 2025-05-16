import { addCity } from './addCity.js';
import { form } from './view.js';

export const cities = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addCity(e);
});
