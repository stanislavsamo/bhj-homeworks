document.addEventListener("DOMContentLoaded", function() {
	let products = document.querySelectorAll(".product");

	let cartProducts = document.querySelector(".cart__products");

	function createCartProduct(id, imageSrc, quantity) {
		let cartProduct = document.createElement("div");
		cartProduct.className = "cart__product";
		cartProduct.setAttribute("data-id", id);

		let cartImage = document.createElement("img");
		cartImage.className = "cart__product-image";
		cartImage.src = imageSrc;
		cartProduct.appendChild(cartImage);

		let cartCount = document.createElement("div");
		cartCount.className = "cart__product-count";
		cartCount.textContent = quantity;
		cartProduct.appendChild(cartCount);

		return cartProduct;
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
		let productTitle = product.querySelector(".product__title").textContent;
		let productImage = product.querySelector(".product__image").src;
		let productQuantity = parseInt(product.querySelector(".product__quantity-value").textContent);

		let existingCartProduct = cartProducts.querySelector(".cart__product[data-id='" + productId + "']");

		if (existingCartProduct) {
			let existingQuantity = parseInt(existingCartProduct.querySelector(".cart__product-count").textContent);
			existingCartProduct.querySelector(".cart__product-count").textContent = existingQuantity + productQuantity;
		} else {
			let cartProduct = createCartProduct(productId, productImage, productQuantity);
			cartProducts.appendChild(cartProduct);
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