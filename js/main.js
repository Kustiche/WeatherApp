import { creatingFavorites } from './creatingFavorites.js';
import { deleteFavorit } from './deleteFavorit.js';
import { addCityArray, obtainingCityName } from './helpers.js';
import { distributionLocalInfo, preservationCityName } from './localStorage.js';
import { render } from './render.js';
import { buttonHearth, favoritesList, form, input } from './view.js';

export const cities = JSON.parse(localStorage.getItem('cities')) ?? [];
export const errorMessage = {
  name: 'Error: ',
  message: 'City not found',
};

input.addEventListener('input', (e) => {
  preservationCityName(e);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  obtainingCityName(e);
});

buttonHearth.addEventListener('click', () => {
  addCityArray();
  creatingFavorites();
});

favoritesList.addEventListener('click', (e) => {
  render(e);

  deleteFavorit(e);
});

distributionLocalInfo();
creatingFavorites();
