document.addEventListener("DOMContentLoaded", function() {
	let loader = document.getElementById("loader");
	let itemsContainer = document.getElementById("items");

	function hideLoader() {
		loader.classList.remove("loader_active");
	}

	function fillCurrencyItems(currencyData) {
		for (let currencyCode in currencyData) {
			if (currencyData.hasOwnProperty(currencyCode)) {
				let currency = currencyData[currencyCode];
				let newItem = document.createElement("div");
				newItem.className = "item";

				newItem.innerHTML = `
                    <div class="item__code">
                        ${currency.CharCode}
                    </div>
                    <div class="item__value">
                        ${currency.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                `;

				itemsContainer.appendChild(newItem);
			}
		}
	}

	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				try {
					let data = JSON.parse(xhr.responseText);
					if (data && data.response && data.response.Valute) {
						let currencyData = data.response.Valute;
						fillCurrencyItems(currencyData);
					} else {
						console.error("Ошибка получения данных о курсе валют");
					}
				} catch (error) {
					console.error("Ошибка при обработке JSON:", error);
				} finally {
					hideLoader();
				}
			} else {
				console.error("Ошибка выполнения запроса. Код статуса:", xhr.status);
				hideLoader();
			}
		}
	};

	xhr.send();
});