import {body, html} from './selectors';

import SiteIconSrc from "../images/brand/mcd-logo.svg";

// Head

const head = document.createElement("head");
head.innerHTML = `    <meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="MCD Store" />
<meta
  name="keywords"
  content="HTML, CSS, Sass, Bootstrap 5, E-commerce, Web Store, Brand, Mare Car Design"
/>
<meta name="author" content="Marko Meseldžija" />
<meta name="theme-color" content="#276ebe">
<link rel="icon" type="icon/svg"/>
<title>Home | MCD</title>
`;

html.prepend(head);

const siteIcon = document.getElementsByTagName("link")[0];
siteIcon.href= SiteIconSrc;

// Header
const header = document.createElement("header");
header.classList.add("fixed-top", "shadow-sm");

header.innerHTML = `<div id="top"></div>
<nav
  class="navbar navbar-expand-lg navbar-light bg-body py-2 py-md-3 custom-header row row-cols-auto justify-content-between"
  aria-label="Main navigation"
>
  <a class="d-flex align-items-center col ps-0" href="#top">
    <img
      id="header-logo"
      class="p-0"
      width="40"
      height="40"
      alt="Logo"
    />
    <h2 class="ms-md-1 mb-0 pe-1 pt-1 d-inline custom-text-hidden">STORE</h2>
  </a>

  <button class="custom-toggler navbar-toggler p-1 border-0 col order-first" type="button" id="navbarSideCollapse"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> 
  <div class="collapse navbar-collapse offcanvas-collapse bg-body col custom-offcanvas justify-content-between" id="navbarsExampleDefault">
    <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item dropdown mx-0 position-relative">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown-products" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">Products</a>
          <a id="navClose" class="btn-close text-reset position-absolute top-0 end-0 pt-4" role="button" aria-label="Close"></a>
          <ul class="dropdown-menu shadow-sm border-0 mb-2 mb-lg-0" aria-labelledby="dropdown-products">
            <li><a class="dropdown-item" href="#">Wrap Designs</a></li>
            <li><a class="dropdown-item" href="#">Illustrations</a></li>
            <li><a class="dropdown-item" href="#">Sketches</a></li>
            <li><a class="dropdown-item" href="#">Visual Tuning</a></li>
          </ul>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="FAQ.html">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
    </ul>

    <form class="search-box mt-3 me-lg-2 mt-lg-0">
      <label class="visually-hidden" for="inlineFormInputGroupSearch">Search</label>
      <div class="input-group rounded-3 shadow custom-form-field d-flex">
        <input type="search" class="form-control border-0" id="inlineFormInputGroupSearch" placeholder="Search"
          aria-label="Search" />
        <a href="#" class="align-self-center m-2 mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
      </div>
    </form>
  </div>

  <button
    class="border-0 bg-body col"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="rgba(41, 41, 41, 0.55)"
      class="bi bi-cart p-1"
      viewBox="0 0 16 16"
    >
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </svg>
  </button>
</nav>`;

body.prepend(header);

const headerLogo = document.getElementById("header-logo");
headerLogo.src = SiteIconSrc;

const navbarSideCollapse =  document.getElementById("navbarSideCollapse");
const offcanvasCollapse = document.getElementsByClassName("custom-offcanvas")[0];
const navClose = document.getElementById("navClose");

//Open off-canvas menu on click
navbarSideCollapse
    .addEventListener("click", function () {
      offcanvasCollapse.classList.add("open");
    });

navClose
.addEventListener("click", function () {
  offcanvasCollapse.classList.remove("open");
});

  export {header};




