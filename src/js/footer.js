import {body} from './selectors';
import FooterLogoSrc from '../images/brand/mcd-logo.svg'

const footer = document.createElement("footer");

footer.classList.add("container", "shadow", "my-5", "p-5", "rounded");
footer.innerHTML = `<div class="row mb-2">
<div class="col-sm-6 col-md-4 col-lg-3">
  <h4>Home</h4>
  <ul class="nav flex-column">
    <li class="nav-item mb-2">
      <a href="#" class="nav-link p-0 text-muted">Products</a>
    </li>
    <li class="nav-item mb-2">
      <a href="#" class="nav-link p-0 text-muted">FAQs</a>
    </li>
    <li class="nav-item mb-2">
      <a href="#" class="nav-link p-0 text-muted">About</a>
    </li>
  </ul>
</div>

<div class="col-sm-6 col-md-4 col-lg-3">
  <h4>Products</h4>
  <ul class="nav flex-column">
    <li class="nav-item mb-2">
      <a href="#" class="nav-link p-0 text-muted">Wrap Designs</a>
    </li>
    <li class="nav-item mb-2">
      <a href="#" class="nav-link p-0 text-muted">Illustrations</a>
    </li>
    <li class="nav-item mb-2">
      <a href="#" class="nav-link p-0 text-muted">Sketches</a>
    </li>
    <li class="nav-item mb-2">
      <a href="#" class="nav-link p-0 text-muted">Visual Tuning</a>
    </li>
  </ul>
</div>

<div class="col-md-4 offset-lg-1">
  <div class="my-5 mt-md-0">
    <h4>Subscribe to our newsletter</h4>
    <p>Monthly digest of whats new and exciting from us.</p>
    <form class="rounded row px-2">
      <div class="col-9 px-0 shadow rounded-0 rounded-start">
        <div class="form-floating">
          <input
            id="newsletter1"
            type="text"
            class="form-control custom-shadow-none rounded-0 rounded-start"
            placeholder="Email address"
          />
          <label for="newsletter1">Email address</label>
        </div>
      </div>
      <button
        class="btn bg-gradient text-white rounded-0 rounded-end col-auto"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-compact-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </button>
    </form>
  </div>
</div>
</div>
<!-- todo custom shadow -->
<hr />
<div
class="d-flex justify-content-between p-1 m-1 border-top mb-4 mb-md-0"
>
<a
  id="mcd-link"
  href="https://marecardesign.netlify.app"
  target="_blank"
  class="rounded-circle"
  data-bs-placement="bottom"
  data-bs-toggle="tooltip" title="Mare Car Design"
>
  <img src="${FooterLogoSrc}" width="50" height="50" alt="Mare Car Design Logo">
</a>
<div class="d-flex flex-column">
  <a
    href="https://marecardesign.netlify.app"
    target="_blank"
    class="custom-text-gradient"
    >&copy; 2021 Mare Car Design</a
  >
  <ul class="list-unstyled d-flex ms-auto mb-0">
    <li>
      <a href="https://instagram.com/marecardesign" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          />
        </svg>
      </a>
    </li>
    <li class="ms-3">
      <a href="https://facebook.com/marecardesign" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          />
        </svg>
      </a>
    </li>
    <li class="ms-3">
      <a href="mailto:marecardesign@gmail.com" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
          />
        </svg>
      </a>
    </li>
  </ul>
</div>
</div>
<h6 class="text-center mb-0">
Made with <span class="custom-text-gradient">&#10084;</span> by
<a
  href="https://marko-meseldzija.netlify.app"
  target="_blank"
  class="custom-text-gradient"
  >Marko Meseldžija</a
>
</h6>`;


body.appendChild(footer);

export {footer};