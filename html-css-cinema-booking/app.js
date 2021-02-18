const seatSelectorForm = document.querySelector('.booking_form');
const ticketView = document.querySelector('.ticket');
const SEAT_PRICE_IN_USD = 20;

const updateTicket = (form, ticket) => {
  const selectedSeats = form.querySelectorAll('.seat_control:checked');
  let total = 0;
  ticket.innerHTML = `
    <li class="ticket_header">Your order:</li>
    <li>Movie: Interstellar</li>
    <li>----------</li>
    <li>Date: 08/02/2021</li>
    <li>Time: 15:00</li>
    <li>----------</li>
    <li>Seats:</li>
    ${[...selectedSeats].map( seat => {
      const seatPosition = seat.id.split('_');
      total += SEAT_PRICE_IN_USD;
      return `<li>row #${seatPosition[1]}, seat #${seatPosition[2]}</li>`;
    }).join('')}
    <li>----------</li>
    <li>Total: $${total.toFixed(2)}</li>
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  seatSelectorForm.addEventListener('change', () => updateTicket(seatSelectorForm, ticketView));
});
