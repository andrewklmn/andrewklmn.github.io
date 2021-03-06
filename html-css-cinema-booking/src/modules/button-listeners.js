import showScreen from './screen-show';
import {
  screens,
  selectorForm,
  cancelButton,
} from './config';

import getSelectedSeats from './seat-selector';

export const payButtonListener = () => {
  alert('Action disabled!');
};

export const cancelButtonListener = () => {
  const selectedSeats = getSelectedSeats(selectorForm);
  selectedSeats.forEach((seat) => {
    seat.click();
  });
};

export const bookButtonListener = (event) => {
  const selectedSeats = getSelectedSeats(selectorForm);
  if (selectedSeats.length > 0) {
    showScreen(screens.confirmation, cancelButton);
  }
  event.preventDefault();
};
