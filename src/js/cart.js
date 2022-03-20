import { body } from "./selectors";

const alertWrapper = document.createElement("div");

const shoppingCart = document.createElement("div");
shoppingCart.classList.add("offcanvas", "offcanvas-end", "bg-body");
shoppingCart.setAttribute("tabindex", "-1");
shoppingCart.setAttribute("id", "offcanvasExample");
shoppingCart.innerHTML = `<div class="offcanvas-header">
 <h5 class="offcanvas-title text-muted" id="offcanvasExampleLabel">
Shopping Cart
</h5>
<button
type="button"
class="btn-close text-reset"
data-bs-dismiss="offcanvas"
aria-label="Close"
></button>
</div>
<div class="offcanvas-body py-5 px-3">
<div id="cart-total" class="position-absolute bottom-0">
<h4>Total</h4>
<hr>
<div class="row row-cols-auto">
  <h3 class="me-auto col"></h3>
  <div class="col btn bg-gradient text-white d-flex justify-content-center align-items-center">Checkout
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
  </div>
</div>
</div>
</div>`;

body.appendChild(shoppingCart);
const cartTotal = document.querySelector("#cart-total h3");

// IDs
export const cards = document.getElementById("product-cards");

// Classes
export const trash = document.getElementsByClassName("custom-trash-icon")[0];
export const cardsWrapper = document.getElementsByClassName("offcanvas-body")[0];
let cartTotalPrice = 0;
cartTotal.innerHTML = `$ ${cartTotalPrice}`;

loadEventListeners();


function loadEventListeners() {
  cards.addEventListener("click", buyProduct);
  cardsWrapper.addEventListener("click", removeProduct);

  function buyProduct(e) {
    if (e.target.classList.contains("custom-add-to-cart")) {
      const product = e.target.parentElement.parentElement;
      getProductInfo(product);
    }
  }

  function getProductInfo(product) {
    let productInfo = {
      image: product.querySelector("img").src,
      title: product.querySelector("h5").textContent,
      category: product.querySelector(".card-text").textContent,
      price: parseInt(product.querySelector(".custom-card-price").innerHTML),
    };
    addToCart(productInfo);

    return productInfo;
  }

  function addToCart(product) {
    const cartItem = document.createElement("div");
    cartItem.classList.add(
      "card",
      "row",
      "flex-row",
      "shadow",
      "p-3",
      "mx-1",
      "mb-4"
    );

    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.title} Image" class="col-4 px-0">
      <div class="card-body col-8 py-0 position-relative">
      <h5 class="card-title mb-1">${product.title}</h5>
      <button class=" position-absolute top-0 end-0 custom-trash-icon border-0 bg-body">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 text-danger custom-remove" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>
      </button>
      <h6 class="card-text text-muted mb-3">${product.category}</h6>
      <div class="px-2 row row-cols-auto align-items-center justify-content-between">
      <div class="col px-0">
      <label for="quantity" class="h6">Quantity:</label>
      <input type="number" class="border-0 bg-body shadow rounded mx-1 p-1 px-2" id="quantity"
      name="quantity" min="1" max="10" />
      </div>
      <div class="col px-0">
      <h4 class="mb-0 me-1">$ <span class="cart-product-price">${product.price}</span></h4>
      </div>
      </div>
      </div>
          `;
    cardsWrapper.appendChild(cartItem);
    alert("Sucessfuly added item to cart.", "success");
    updatePrice("+", product);

    return cartItem;
  }

  function updatePrice(sign, product) {
    if (sign === "+") cartTotalPrice += product.price; // add to cart
    // else if(sign === '-') cartTotalPrice -= product.price; // remove from cart
    cartTotal.innerHTML = `$ ${cartTotalPrice}`;
  }

  function removeProduct(e) {
    if (e.target.classList.contains("custom-remove")) {
      const cartProduct = e.target.parentElement.parentElement.parentElement;
      const cartProductPrice = document.querySelector(
        ".cart-product-price"
      ).innerHTML;
      cartTotalPrice -= cartProductPrice; // remove from cart
      cartTotal.innerHTML = `$ ${cartTotalPrice}`;
      cartProduct.remove();
      alertWrapper.remove();
      alert("Sucessfuly removed item from cart.", "success");
    }
  }
}

function alert(message, type) {
  alertWrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible custom-alert" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  body.appendChild(alertWrapper);
}

export {shoppingCart};