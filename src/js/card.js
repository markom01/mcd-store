import { supra, celica } from "./products";
import { main } from "./selectors";
import { viewProduct } from "./pages/productPage";

function loadProduct(product, parentContainer) {
  const productCards = document.querySelector(parentContainer);
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card", "custom-card",
  "text-center", "shadow", "border-0", "my-5", "p-3");

  if(productCards.classList.contains('carousel-inner')) {
    cardWrapper.classList.add("carousel-item", "align-self-center", "w-75", "mx-auto");
    if(productCards.children.length == 0) {
      cardWrapper.classList.add("active");
    }
  }
  if(productCards.classList.contains('row-cols-1')) {
    cardWrapper.classList.add("col", "mx-4");
  }

  cardWrapper.innerHTML = `
  <button class="position-absolute top-0 end-0 bg-body custom-add-to-cart custom-border-radius-bl-tr"
  data-bs-toggle="tooltip" title="Add To Cart">  
    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-cart-plus m-2" 
    width="16" height="16" fill="var(--bs-primary)" viewBox="0 0 16 16"
    
    >
      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  </button>
  <div class="custom-card-wrapper position-relative">
    <img class="shadow custom-card-image product-image" src="${product.images[0]}">
    <div class="card-body pb-0 ps-0 row">
      <div class="text-start pl-0 col-8 me-auto">
        <h5 class="card-title mb-1 text-truncate product-name">${product.title}</h5>
        <h6 class="product-category text-muted">${product.features.category}</h6>
      </div>
      <a href="./product.html"
        class="btn text-primary col-auto d-flex justify-content-center align-items-center text-uppercase spaced-text shadow more-info-btn"
      >
        <h6 class="d-inline mb-0 ">$ <span class="product-price">${product.price}</span></h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-compact-right d-inline"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </a>
    </div>
  </div>
`;

  productCards.appendChild(cardWrapper);
}



loadProduct(supra, ".carousel-inner");
const moreInfoBtn = document.getElementsByClassName("more-info-btn")[0];
moreInfoBtn.addEventListener("click", () => {viewProduct(supra)});

loadProduct(celica, ".carousel-inner");
const moreInfoBtn1 = document.getElementsByClassName("more-info-btn")[1];
moreInfoBtn1.addEventListener("click", () => {viewProduct(celica)});
