import { PRODUCTS_LIST } from "./productsList.js";

function afterRenderHTML() {
  renderProducts();
}

// create this function for get the attribute and dispatch it
function addToCartClickButton(e) {
  const PRODUCT_ADD_TO_CART_BUTTON = e.target;
  const PRODUCT_ID = Number(PRODUCT_ADD_TO_CART_BUTTON.getAttribute("data-product-id"));
  const ADD_TO_CART_EVENT = new CustomEvent("addToCart", {
    detail: { productId: PRODUCT_ID },
  });
  window.dispatchEvent(ADD_TO_CART_EVENT);
}

// create function for render each element with properties
function renderProducts() {
  const IMAGE_GALLERY_UL = document.getElementById("image-gallery");

  for (let i = 0; i < PRODUCTS_LIST.length; i++) {
    const PRODUCT_CONTAINER_LI = document.createElement("li");
    const PRODUCT_TOPSIDE = document.createElement("div");
    const PRODUCT_BOTSIDE = document.createElement("div");
    const PRODUCT_IMG = document.createElement("img");
    const PRODUCT_BRAND_DIV = document.createElement("div");
    const PRODUCT_NAME_DIV = document.createElement("div");
    const PRODUCT_PRICE_DIV = document.createElement("div");
    const PRODUCT_ADD_TO_CART_BUTTON = document.createElement("button");

    PRODUCT_IMG.src = PRODUCTS_LIST[i].imgSrc;
    PRODUCT_IMG.alt = PRODUCTS_LIST[i].imgAlt;
    PRODUCT_TOPSIDE.classList.add("product-topside");
    PRODUCT_BOTSIDE.classList.add("product-botside");
    PRODUCT_BRAND_DIV.classList.add("product-brand-name");
    PRODUCT_BRAND_DIV.textContent = PRODUCTS_LIST[i].brand;
    PRODUCT_NAME_DIV.classList.add("product-name");
    PRODUCT_NAME_DIV.textContent = PRODUCTS_LIST[i].name;
    PRODUCT_PRICE_DIV.classList.add("product-price");
    PRODUCT_PRICE_DIV.textContent = `${PRODUCTS_LIST[i].price.toFixed(2)} €`;
    PRODUCT_ADD_TO_CART_BUTTON.classList.add("product-add-to-cart-button");
    PRODUCT_ADD_TO_CART_BUTTON.textContent = "Añadir al carrito";
    PRODUCT_ADD_TO_CART_BUTTON.addEventListener("click", addToCartClickButton);
    PRODUCT_ADD_TO_CART_BUTTON.setAttribute("data-product-id", PRODUCTS_LIST[i].id);

    PRODUCT_BOTSIDE.replaceChildren(PRODUCT_PRICE_DIV, PRODUCT_ADD_TO_CART_BUTTON)
    PRODUCT_TOPSIDE.replaceChildren(PRODUCT_IMG, PRODUCT_BRAND_DIV, PRODUCT_NAME_DIV);
    PRODUCT_CONTAINER_LI.replaceChildren(PRODUCT_TOPSIDE, PRODUCT_BOTSIDE);
    IMAGE_GALLERY_UL.appendChild(PRODUCT_CONTAINER_LI);
  }
}

document.addEventListener("DOMContentLoaded", afterRenderHTML);