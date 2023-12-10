document.addEventListener("DOMContentLoaded", function() {
	let products = document.querySelectorAll(".product");
	let cartProducts = document.querySelector(".cart__products");
  
	function createCartProduct(id, imageSrc, quantity) {
	  return `
		<div class="cart__product" data-id="${id}">
		  <img class="cart__product-image" src="${imageSrc}">
		  <div class="cart__product-count">${quantity}</div>
		</div>
	  `;
	}
  
	function handleQuantityButtonClick(event, increment) {
	  let quantityElement = event.target.parentElement.querySelector(".product__quantity-value");
	  let currentQuantity = parseInt(quantityElement.textContent);
  
	  let newQuantity = increment ? currentQuantity + 1 : Math.max(currentQuantity - 1, 1);
	  quantityElement.textContent = newQuantity;
	}
  
	function handleAddToCartButtonClick(event) {
	  let product = event.target.closest(".product");
	  let productId = product.getAttribute("data-id");
	  let productImage = product.querySelector(".product__image").src;
	  let productQuantity = parseInt(product.querySelector(".product__quantity-value").textContent);
  
	  let existingCartProduct = cartProducts.querySelector(`.cart__product[data-id='${productId}']`);
  
	  if (existingCartProduct) {
		let existingQuantity = parseInt(existingCartProduct.querySelector(".cart__product-count").textContent);
		existingCartProduct.querySelector(".cart__product-count").textContent = existingQuantity + productQuantity;
	  } else {
		let cartProduct = createCartProduct(productId, productImage, productQuantity);
		cartProducts.insertAdjacentHTML("beforeend", cartProduct);
	  }
	}
  
	products.forEach(function(product) {
	  let incButton = product.querySelector(".product__quantity-control_inc");
	  let decButton = product.querySelector(".product__quantity-control_dec");
	  let addToCartButton = product.querySelector(".product__add");
  
	  incButton.addEventListener("click", function(event) {
		handleQuantityButtonClick(event, true);
	  });
  
	  decButton.addEventListener("click", function(event) {
		handleQuantityButtonClick(event, false);
	  });
  
	  addToCartButton.addEventListener("click", handleAddToCartButtonClick);
	});
  });
  