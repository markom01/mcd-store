import { body } from "./selectors";
import { viewProduct } from "./card";
import { alert, removeAlert } from "./components/bootstrap";



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
<div id="cards-wrapper"></div>
<div id="cart-total" class="position-absolute bottom-0">
<div class="row row-cols-auto">
  <h4 class="col me-auto">Total</h4>
  <button id="empty-cart" class="shadow col rounded">Empty Cart</button>
</div>
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
// export const cards = document.getElementById("product-cards");

// Classes
export const trash = document.getElementsByClassName("custom-trash-icon")[0];
export const cardsWrapper = document.getElementById("cards-wrapper");
export const emptyCartBtn = document.getElementById("empty-cart");
let cartTotalPrice = 0;
cartTotal.innerHTML = `$ ${cartTotalPrice}`;

loadEventListeners();

function loadEventListeners() {
  body.addEventListener("click", buyProduct);
  cardsWrapper.addEventListener("click", removeProduct);
  emptyCartBtn.addEventListener("click", emptyCart);
  
}

function buyProduct(e) {
  
  if (e.target.classList.contains("custom-add-to-cart")) {
    const product = e.target.parentElement;
    getProductInfo(product);
  }
}

function getProductInfo(product) {
  //todo select components on product page on click
  let productInfoObj = {
    image: product.getElementsByClassName("product-image")[0],
    title: product.querySelectorAll(".product-name")[0].textContent,
    category: product.querySelector(".product-category").textContent,
    price: parseInt(product.querySelector(".product-price").innerHTML),
  };
  addToCart(productInfoObj);

  return productInfoObj;
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
    <img src="${product.image.src}" alt="${product.title} Image" class="col-4 px-0">
    <div class="card-body col-8 py-0 position-relative">
    <h5 class="card-title mb-1">${product.title}</h5>
    <button class="position-absolute top-0 end-0 custom-trash-icon border-0 bg-body custom-remove" data-bs-toggle="tooltip" title="Remove From Cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 text-danger" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>
    </button>
    <h6 class="card-text text-muted mb-3">${product.category}</h6>
    <div class="px-2 row row-cols-auto align-items-center justify-content-between">
    <div class="col px-0">
    <label for="quantity" class="h6">Quantity:</label>
    <input type="number" class="border-0 bg-body shadow rounded mx-1 p-1 px-2" id="quantity"
    name="quantity" min="1" max="10" value="1" />
    </div>
    <div class="col px-0">
    <h4 class="mb-0 me-1">$ <span class="cart-product-price"></span></h4>
    </div>
    </div>
    </div>
        `;
  cardsWrapper.appendChild(cartItem);
  updateProductPrice(product);

  alert("Sucessfuly added item to cart.", "success");
  // console.log(quantity)
  return cartItem;
}

function updateProductPrice(product) {
  //todo finish logic
  document.getElementById("quantity").addEventListener("input", (e) => {
    let cartProductPrice = e.target.value * product.price;
    document.querySelector(".cart-product-price").innerHTML = `${cartProductPrice}`;
    // console.log(cartProductPrice + "doll")
    updateCartPrice(cartProductPrice);
  });
}

function updateCartPrice(cartProductPrice) {
  //todo finish logic
  const prices = [];
  prices.push(cartProductPrice);
  const pricesTotal = prices.reduce((a, b) => a + b, 0);
  cartTotal.innerHTML = `$ ${pricesTotal}`;
  // cartTotalPrice = cartProductPrice; // add to cart
  // console.log(cartTotalPrice)
}

function removeProduct(e) {
  // const alertWrapper = document.createElement("div");
  if (e.target.classList.contains("custom-remove")) {
    const cartProduct = e.target.parentElement.parentElement;
    const cartProductPrice = document.querySelector(
      ".cart-product-price"
    ).innerHTML;
    cartTotalPrice -= cartProductPrice;
    if (cartTotalPrice < 0) cartTotalPrice = 0; // remove from cart
    cartTotal.innerHTML = `$ ${cartTotalPrice}`;
    cartProduct.remove();
    removeAlert();
    alert("Sucessfuly removed item from cart.", "success");
  }
}

function emptyCart(){
  cardsWrapper.replaceChildren();
  cartTotalPrice = 0;
  cartTotal.innerHTML = `$ ${cartTotalPrice}`;
  alert("Sucessfuly empty cart.", "success");
}



export { buyProduct, getProductInfo, addToCart, updateCartPrice, removeProduct, emptyCart, alert };