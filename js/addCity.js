import { cities } from './main.js';
import { obtainingInfo } from './obtainingInfo.js';

export function addCity(e) {
  const input = e.target.querySelector('.weather__input');

  obtainingInfo(input.value);

  input.value = '';
}
