import { creatingFavorites } from './creatingFavorites.js';
import { cities } from './main.js';

export function deleteFavorit(e) {
  const listItem = e.target.closest('.favorites__item');
  const textButton = listItem.querySelector('.favorites__text-btn');
  const isButton = e.target.classList.contains('favorites__btn');

  if (isButton) {
    const cityIndex = cities.indexOf(textButton.textContent);

    cities.splice(cityIndex, 1);

    creatingFavorites();

    localStorage.setItem('cities', JSON.stringify(cities));
  }
}
