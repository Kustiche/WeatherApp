import { notification, notificationText } from './view.js';

export function callNotification(message) {
  notificationText.textContent = message;

  notification.classList.add('active');

  setTimeout(() => {
    notification.classList.remove('active');
  }, 3000);
}
