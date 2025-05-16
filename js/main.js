import { creatingFavorites } from './creatingFavorites.js';
import { addCityArray } from './helpers.js';
import { obtainingInfo } from './obtainingInfo.js';
import { render } from './render.js';
import { buttonHearth, favoritesList, form } from './view.js';

export const cities = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  obtainingInfo(e);
});

buttonHearth.addEventListener('click', () => {
  addCityArray();
  creatingFavorites();
});

favoritesList.addEventListener('click', (e) => {
  render(e);
});
