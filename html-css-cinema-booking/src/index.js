import {
  screens,
  selectorForm,
  bookButton,
  cancelButton,
  payButton,
} from './modules/config';

/*
import './css/style.css';
import './css/ticket_view.css';
*/

import showScreen from './modules/screen-show';
import { payButtonListener, bookButtonListener } from './modules/button-listeners';
import updateTicket from './modules/ticket-updater';

document.addEventListener('DOMContentLoaded', () => {
  selectorForm.addEventListener('change', updateTicket);
  bookButton.addEventListener('click', bookButtonListener);
  cancelButton.addEventListener('click', () => showScreen(screens.main, bookButton));
  payButton.addEventListener('click', payButtonListener);
});
