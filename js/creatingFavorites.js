import { cities } from './main.js';
import { favoritesList } from './view.js';

export function creatingFavorites() {
  favoritesList.innerHTML = '';

  cities.forEach((cityName) => {
    const listItem = document.createElement('li');
    const textButton = document.createElement('button');
    const button = document.createElement('button');

    listItem.className = 'favorites__item';
    textButton.className = 'favorites__text-btn btn-reset';
    textButton.textContent = cityName;
    button.className = 'favorites__btn btn-reset';

    listItem.append(textButton);
    listItem.append(button);

    favoritesList.prepend(listItem);
  });
}
