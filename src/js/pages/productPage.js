// import { productFeatures } from "../products";
// import { main, body } from "../selectors";
// import { homePage } from "./homepage";
import { getProductInfo } from "../cart";

// function loadProductPage(product) {

//   const productPage = document.createElement("div");
//   productPage.classList.add("row", "mt-lg-5", "pt-5", "justify-content-around");
//   productPage.setAttribute("id", "product-info");
  
//   productPage.innerHTML = `
//     <button id="navigate-back" class="position-fixed top-50 d-flex align-self-start rounded shadow">Back</button>
//     <div id="carouselExampleControls" class="carousel slide col-md-6 mb-4 px-3 px-md-0 px-lg-5" data-bs-ride="carousel">
//       <div class="carousel-inner d-flex align-items-center px-5 py-5 h-100">
//       </div>
//       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
//         data-bs-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
//         data-bs-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//     <div class="col-md-6 col-lg-5 my-5 p-lg-2">
//       <a class="custom-anchor" id="overview"></a>
//       <div class="container shadow rounded p-4">
//         <div class="row row-cols-auto align-items-center">
//           <h1 class="col me-auto mb-0 custom-text-gradient product-name">${product.title}</h1>
//           <a
//             class="col tt" data-bs-toggle="tooltip" data-bs-placement="auto" title="${product.features.madeIn.name}">
//             <img src="${product.features.madeIn.src}" width="22" alt="Adobe ${product.features.madeIn.name} CC icon">
//           </a>
//         </div>
//         <h5 class="text-muted mb-4 mb-lg-0 mt-1 product-category">${product.features.category}</h5>
  
//         <div class="row align-items-center justify-content-center my-5 gy-3">
          
//           <div id="features" class="col-12 col-xxl-6">
//           </div>
  
//           <div class="col-12 col-xxl-6">
//             <h6 class="text-muted"><span class="text-primary">*</span> Select file extensions to download:</h6>
//             <div id="checkboxes" class="mt-0">
//             </div>
//           </div>
  
//         </div>
//         <div class="row px-2 align-items-center">
//           <div class="col-5 px-0">
//             <label for="quantity" class="h5">Quantity:</label>
//             <input type="number" class="col-5 border-0 bg-body shadow rounded mx-1 p-1 px-2" id="quantity"
//               name="quantity" min="1" max="10" />
//           </div>
//           <div class="col-auto px-0 ms-auto d-flex justify-content-end">
//             <h4 class="d-inline mb-0 me-1 align-self-center text-primary">
//               $ <span class="product-price">${product.price}</span>
//             </h4>
//             <button id="add-to-cart-product" class="btn btn-lg shadow mx-1 text-uppercase spaced-text text-primary custom-add-to-cart">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
  
//     <div class="mb-5">
//       <a class="custom-anchor" id="details"></a>
//       <h3 class="mb-3">Details</h3>
//       <ul id="product-description" class="custom-list mb-0">
//       </ul>
//     </div>
  
//     <div class="mb-5">
//       <a class="custom-anchor" id="user-reviews"></a>
//       <h3 class="mb-3">User Reviews</h3>
//       <div class="row row-cols-auto justify-content-center align-items-center mt-4">
//         <p class="col mb-0">${product.reviews}</p>
//         <button class="btn shadow rounded d-flex align-items-center text-primary"> 
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus col me-1" viewBox="0 0 16 16">
//             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
//           </svg>
//           Add new Review</button>
//       </div>
//     </div>
  
//     <div class="row row-cols-auto gx-2 mb-3">
//       <a class="col custom-anchor" id="more-illustrations"></a>
//       <img height="35" class="ps-0 rounded-circle"
//         id="illustration-icon"
//         alt="Illustrations Logo Icon">
  
//       <h2 class="col ps-2 mb-0">More Illustrations</h2>
  
//       <a href="" class="btn text-primary
//             col
//             ms-auto
//             d-flex
//             align-items-center
//             justify-content-end
//             shadow
//           ">
//         <h6 class="mb-0">Show More</h6>
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//           class="bi bi-chevron-compact-right d-inline" viewBox="0 0 16 16">
//           <path fill-rule="evenodd"
//             d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
//         </svg>
//       </a>
//     </div>
  
//     <div class="row row-cols-auto justify-content-around">

//     </div>
  
//     <div class="row gx-2">
//       <a class="custom-anchor" id="more-products"></a>
//       <h2 class="col-auto">More products</h2>
//       <a href="" class="btn text-primary
//           col-auto
//           ms-auto
//           d-flex
//           align-items-center
//           justify-content-end
//           shadow
//         ">
//         <h6 class="mb-0">Show More</h6>
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//           class="bi bi-chevron-compact-right d-inline" viewBox="0 0 16 16">
//           <path fill-rule="evenodd"
//             d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
//         </svg>
//       </a>
//     </div>
  
//     <div class="row row-cols-auto justify-content-around">

//     </div>
//   `;
//   main.appendChild(productPage);
//     //todo continue
// }

function loadProductData(product) {
  document.getElementById("product-name").innerHTML = `${product.title}`;
  document.getElementById("product-made-in-link").title = `${product.features.madeIn.name}`;
  const productMadeInImg = document.getElementById("product-made-in-image");
  console.log(productMadeInImg)
  productMadeInImg.src = `${product.features.madeIn.src}`;
  productMadeInImg.alt = `Adobe ${product.features.madeIn.name} CC icon`;
  document.getElementById("product-category").innerHTML = `${product.features.category}`;
  document.getElementById("product-price").innerHTML = `${product.price}`;
  document.getElementById("product-reviews").innerHTML = `${product.reviews}`;
  document.getElementById("category-image").src = `${product.features.madeIn.customIcon}`;
  document.getElementById("category-text").innerHTML += `${product.features.category}`;
}



function addCheckBoxes(product) {
  const checkboxes = document.getElementById("checkboxes");
  for (let i = 0; i < product.fileTypes.length; i++) {
    checkboxes.innerHTML += `
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox${i+1}" value="option${i+1}" />
        <label class="form-check-label" for="inlineCheckbox1">${product.fileTypes[i]}</label>
      </div>
    `;
  }
}

function addFeatures(product) {
  const featuresEl = document.getElementById("features");
  
  featuresEl.innerHTML = `
    <div class="d-flex align-items-center mb-2">
      ${product.defaultFeature.icon}
      <h5 class="mb-0 d-inline">${product.defaultFeature.text}</h5>
    </div>
    `;
  for (const listItem in product.features.list) {
    featuresEl.innerHTML += `
    <div class="d-flex align-items-center mb-2">
      ${product.features.list[listItem].icon}
      <h5 class="mb-0 d-inline">${product.features.list[listItem].text}</h5>
    </div>
    `;
  }
}

function addDescription(product) {
  const descriptionList = document.getElementById("product-description");
  for (let i = 0; i < product.description.length; i++) {
    descriptionList.innerHTML += `
      <li class="custom-list-item">${product.description[i]}</li>
    `;
    
  }
}

function loadPictures(product) {
  const carousel = document.getElementsByClassName("carousel-inner")[0];
  for (let i = 0; i < product.images.length; i++) {
    carousel.innerHTML += `
      <div class="carousel-item">
        <img class="image img-fluid product-image shadow">
      </div>
    `;    
    const carouselImages = document.querySelectorAll(".carousel-item > .product-image");
    carouselImages[i].src = product.images[i];
  }
  const firstCarouselItem = document.getElementsByClassName("carousel-item")[0];
  firstCarouselItem.classList.add("active");

  const illustrationIcon = document.getElementById("illustration-icon");
  illustrationIcon.src = require("../../images/mcd/icons/Illustrations.jpg");
}

function buyProductPP() {
  const productInfo = document.getElementById("product-info");
  getProductInfo(productInfo);
}

function viewProduct(product) {
  // main.replaceChildren(); // remove all content from <main>
  // loadProductPage(product);
  loadProductData(product);
  addFeatures(product);
  loadPictures(product);
  addDescription(product);
  addCheckBoxes(product);
  // const navigateBack= document.getElementById("navigate-back");
  const addToCartBtnProduct = document.getElementById("add-to-cart-product");
  addToCartBtnProduct.addEventListener("click", buyProductPP);
  // navigateBack.addEventListener("click", () => {main.replaceChildren(homePage)})
  console.log(productMadeInImg);
};



//todo finish

export {viewProduct};
