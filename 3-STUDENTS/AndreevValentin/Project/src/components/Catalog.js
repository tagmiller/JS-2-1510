import CatalogItem from "./CatalogItem.js";

function getItems() {
	// This should be retrieved from a server...
	return {
		0: new CatalogItem(0, "Mango people T-shirt", 5200,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/0.jpg"),
		1: new CatalogItem(1, "Banana people T-shirt", 5300,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/1.jpg"),
		2: new CatalogItem(2, "Strawberry people T-shirt", 5500,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/2.jpg"),
		3: new CatalogItem(3, "Orange people T-shirt", 6700,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/3.jpg"),
		4: new CatalogItem(4, "Pumpkin people T-shirt", 6900,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/4.jpg"),
		5: new CatalogItem(5, "Pineapple people T-shirt", 9400,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/5.jpg"),
		6: new CatalogItem(6, "Cucumber people T-shirt", 2300,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/6.jpg"),
		7: new CatalogItem(7, "Tomato people T-shirt", 4500,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/7.jpg")
	};
}

export default class Catalog {
	constructor(cart, container, itemsPerRow) {
		this.container = container;
		this.items = getItems();
		this.cart = cart;

		this._handleEvents();
		this._render(itemsPerRow);
	}

	_handleEvents() {
		this.container.addEventListener("click", e => {
			if(!e.target.classList.contains("snippet__addToCart")) {
				return;
			}

			const id = +e.target.dataset.itemId;
			this.cart.add(this.items[id]);
		});
	}

	_render(itemsPerRow) {
		let html = Object.values(this.items).map(item => item.toHtml()).join("");

		// A hack to get items on the last row to align
		for(let i = 0; i < itemsPerRow - 1; ++i) {
			html += '<div class="snippet__filler"></div>';
		}

		this.container.innerHTML = html;
	}
};
