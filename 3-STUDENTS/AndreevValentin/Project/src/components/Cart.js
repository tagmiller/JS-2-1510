import {padNum} from "./common.js";
import CartItem from "./CartItem.js";

export default class Cart {
	constructor() {
		this.popup = document.getElementById("cartPopup");
		this.itemsWrapper = document.getElementById("cartPopupItems");
		this.totalBox = document.getElementById("cartPopupTotal");
		this.items = [];

		this._handleEvents();
		this._render();
	}

	_handleEvents() {
		document.getElementById("cartPopupButton").addEventListener("click", () => {
			this.popup.classList.toggle("hidden");
		});
		this.itemsWrapper.addEventListener("click", e => {
			if(!e.target.classList.contains("cartPopup__itemRemove")) {
				return;
			}

			this.remove(+e.target.dataset.itemId);
		});
	}

	_render() {
		this.itemsWrapper.innerHTML =
			this.items.map(item => item.toHtml()).join("");

		const total = this.items.reduce((a, b) => a + b.price * b.qty, 0);
		this.totalBox.innerHTML =
			`\$${Math.floor(total / 100)}.${padNum(total % 100)}`;
	}

	add(newItem) {
		const item = this.items.find(x => x.id == newItem.id);
		if(item === undefined) {
			this.items.push(new CartItem(newItem));
		} else {
			++item.qty;
		}
		this._render();
	}

	remove(id) {
		const index = this.items.findIndex(x => x.id == id)
		const item = this.items[index];
		if(item.qty == 1) {
			this.items.splice(index, 1);
		} else {
			--item.qty;
		}
		this._render();
	}
}
