import { obtainingInfo } from './obtainingInfo.js';

export function render(e) {
  const isTextButton = e.target.classList.contains('favorites__text-btn');

  if (isTextButton) {
    obtainingInfo(e.target.textContent);
  }
}
