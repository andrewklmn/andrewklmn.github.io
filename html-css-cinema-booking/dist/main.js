(()=>{"use strict";const e=document.querySelector("main"),t=document.querySelector(".booking_form"),r=document.querySelector(".ticket"),i=r.innerHTML,n=t.querySelector(".book_button"),o=document.querySelector(".confirm_screen"),c=document.querySelector(".ticket_date_time"),l=document.querySelector(".ticket_seats"),d=document.querySelector(".ticket_total"),a=document.querySelector(".cancel_confirm_button"),u=document.querySelector(".confirm_button"),s={date:t.querySelector(".date_selector > .radio_control:checked").getAttribute("aria-label"),time:t.querySelector(".time_selector > .radio_control:checked").getAttribute("aria-label")};function m(e,t,r){t.classList.add("hidden"),e.classList.remove("hidden"),r.focus()}const _=()=>{alert("Action disabled!")},S=r=>{t.querySelectorAll(".seat_control:checked").length>0&&m(o,e,a),r.preventDefault()};function k(){const e=[...t.querySelectorAll(".seat_control:checked")];if(0===e.length)return void(r.innerHTML=i);const n=t.querySelector(".date_selector > .radio_control:checked").getAttribute("aria-label"),o=t.querySelector(".time_selector > .radio_control:checked").getAttribute("aria-label");if(n!==s.date||o!==s.time)return e.forEach((e=>{e.checked=!1})),s.date=n,s.time=o,void(r.innerHTML=i);let a=0;r.innerHTML=`\n    <li class="ticket_header">Your order:</li>\n    <li>Movie: Interstellar</li>\n    <li>----------</li>\n    <li>Date: ${n}</li>\n    <li>Time: ${o}</li>\n    <li>----------</li>\n    <li>Seats:</li>\n    ${e.map((e=>{const t=e.id.split("_");return a+=20,`<li>row #${t[1]}, seat #${t[2]}</li>`})).join("")}\n    <li>----------</li>\n    <li>Total: $${a.toFixed(2)}</li>\n  `,c.innerHTML=`Show time: ${n}, ${o}`,l.innerHTML=`${e.map((e=>{const t=e.id.split("_");return`<div>row #${t[1]}, seat #${t[2]}</div>`})).join("")}`,d.innerHTML=`Price: $${a.toFixed(2)}`}document.addEventListener("DOMContentLoaded",(()=>{t.addEventListener("change",k),n.addEventListener("click",S),a.addEventListener("click",(()=>m(e,o,n))),u.addEventListener("click",_)}))})();