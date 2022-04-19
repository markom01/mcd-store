import * as bootstrap from 'bootstrap';
import { body } from '../selectors';


const initTooltips = () => {
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips.forEach((t) => {
    new bootstrap.Tooltip(t);
  });
}

const alertWrapper = document.createElement("div");
function alert(message, type) {
  alertWrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible custom-alert fade show" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  body.appendChild(alertWrapper);
}

function removeAlert() {
  alertWrapper.remove();
}
  

export {initTooltips, alert, removeAlert};