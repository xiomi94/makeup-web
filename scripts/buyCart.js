import { getProductById, PRODUCTS_LIST } from "./productsList.js";

let buyCart = [];

function afterRenderHTML() {
  listenAddToCartEvent();
  loadByLocalStorage();
  listenBuyCartIconClick();
}

function loadByLocalStorage() {
  const BUY_CART_BY_LOCAL_STORAGE = localStorage.getItem("buyCart");
  if (BUY_CART_BY_LOCAL_STORAGE) {
    buyCart = JSON.parse(BUY_CART_BY_LOCAL_STORAGE);
    renderBuyCartList();
    updateBuyCartIconBadge();
  }
}

function deleteButtonEvent(e) {
  const PRODUCT_DELETE_BUTTON = e.target;
  const INDEX = Number(PRODUCT_DELETE_BUTTON.getAttribute("data-index"));
  buyCart.splice(INDEX, 1);
  const PRODUCT_CART_LIST = document.getElementById("product-cart-list");
  if (buyCart.length == 0 && !PRODUCT_CART_LIST.classList.contains("product-cart-list-hidden")) {
    hideProductCartList();
  }
  localStorage.setItem("buyCart", JSON.stringify(buyCart));
  renderBuyCartList();
  updateBuyCartIconBadge();
}

function renderBuyCartList() {
  const PRODUCT_LIST_UL = document.getElementById("product-cart-list");
  PRODUCT_LIST_UL.replaceChildren();

  for (let i = 0; i < buyCart.length; i++) {
    const PRODUCT = getProductById(buyCart[i].productId);

    const PRODUCT_LI = document.createElement("li");
    const PRODUCT_IMG = document.createElement("img");
    const PRODUCT_LEFTSIDE = document.createElement("div");
    const PRODUCT_DETAILS = document.createElement("div");
    const PRODUCT_BRAND = document.createElement("div");
    const PRODUCT_NAME = document.createElement("div");
    const PRODUCT_RIGHTSIDE = document.createElement("div");
    const PRODUCT_PRICE = document.createElement("div");
    const PRODUCT_DELETE_BUTTON = document.createElement("button");

    PRODUCT_IMG.src = PRODUCT.imgSrc;
    PRODUCT_IMG.alt = PRODUCT.imgAlt;
    PRODUCT_BRAND.textContent = PRODUCT.brand;
    PRODUCT_NAME.textContent = PRODUCT.name;
    PRODUCT_PRICE.textContent = `${PRODUCT.price.toFixed(2)} €`;
    PRODUCT_DELETE_BUTTON.textContent = "Eliminar";
    PRODUCT_DELETE_BUTTON.setAttribute("data-index", i);
    PRODUCT_LI.classList.add("product-cart-li");
    PRODUCT_LEFTSIDE.classList.add("product-cart-li-leftside");
    PRODUCT_IMG.classList.add("product-cart-li-img");
    PRODUCT_BRAND.classList.add("product-cart-li-brand");
    PRODUCT_NAME.classList.add("product-cart-li-name");
    PRODUCT_PRICE.classList.add("product-cart-li-price");
    PRODUCT_RIGHTSIDE.classList.add("product-cart-li-rightside");
    PRODUCT_DELETE_BUTTON.classList.add("product-cart-li-delete-button");
    PRODUCT_DELETE_BUTTON.addEventListener("click", deleteButtonEvent);


    PRODUCT_LI.replaceChildren(PRODUCT_LEFTSIDE, PRODUCT_RIGHTSIDE);
    PRODUCT_LEFTSIDE.replaceChildren(PRODUCT_IMG, PRODUCT_DETAILS);
    PRODUCT_DETAILS.replaceChildren(PRODUCT_BRAND, PRODUCT_NAME);
    PRODUCT_RIGHTSIDE.replaceChildren(PRODUCT_PRICE, PRODUCT_DELETE_BUTTON);
    PRODUCT_LIST_UL.appendChild(PRODUCT_LI);

  }
}

function addToCartEvent(e) {
  const PRODUCT_ID = e.detail.productId;
  buyCart.push({ productId: PRODUCT_ID });
  localStorage.setItem("buyCart", JSON.stringify(buyCart));
  renderBuyCartList();
  updateBuyCartIconBadge();
}

function listenAddToCartEvent() {
  window.addEventListener("addToCart", addToCartEvent);
}

function showProductCartList() {
  const PRODUCT_CART_LIST = document.getElementById("product-cart-list");
  if (buyCart.length != 0) {
    PRODUCT_CART_LIST.classList.remove("product-cart-list-hidden");
  } else {
    const ALERT_DIV = document.createElement("div");
    const BODY = document.body;

    ALERT_DIV.classList.add("alert", "alert-warning", "alert-product-empty");
    ALERT_DIV.setAttribute("role", "alert");
    ALERT_DIV.textContent = "Tu cesta está vacía";

    BODY.appendChild(ALERT_DIV);

    setInterval(() => {
      ALERT_DIV.remove();
    }, 3000);
  }
}

function hideProductCartList() {
  const PRODUCT_CART_LIST = document.getElementById("product-cart-list");
  PRODUCT_CART_LIST.classList.add("product-cart-list-hidden");
}

function buyCartIconClick() {
  const PRODUCT_CART_LIST = document.getElementById("product-cart-list");
  if (PRODUCT_CART_LIST.classList.contains("product-cart-list-hidden")) {
    showProductCartList();
  } else {
    hideProductCartList();
  }
}

function updateBuyCartIconBadge() {
  const BUY_CART_ICON_BADGE = document.getElementById("buy-cart-icon-badge");
  BUY_CART_ICON_BADGE.textContent = buyCart.length;
}

function listenBuyCartIconClick() {
  const BUY_CART_ICON_I = document.getElementById("buy-cart-icon-i");
  BUY_CART_ICON_I.addEventListener("click", buyCartIconClick);
}

document.addEventListener("DOMContentLoaded", afterRenderHTML);