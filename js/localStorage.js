import { input } from './view.js';

export function preservationCityName(e) {
  localStorage.setItem('inputText', JSON.stringify(e.target.value));
}

export function distributionLocalInfo() {
  input.value = JSON.parse(localStorage.getItem('inputText'));
}
