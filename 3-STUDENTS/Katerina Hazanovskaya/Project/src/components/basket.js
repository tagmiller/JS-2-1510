import BasketItem from './basketItem.js';
import HeadClass from './headClass.js';

export default class Basket extends HeadClass { 
	constructor(basket, container, url) {
		super(basket, '#basket', '/basket.json');
	}
    init() {
        this.wrapper = document.querySelector('.drop-cart');
        
        this._get(this.url)
            .then(basketObject => {
                this.items = basketObject.content
            })
            .then(() => {
                this._render();
                this._handleEvents();
				})
			 }

    _handleEvents() {
        document.querySelector('#toggle-basket').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden');
            console.log(this)
        });

        this.container.addEventListener('click', e => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset.id)
            }
        })
	 }
	 
    add(item) {
        let find = this.items.find(basketItem => basketItem.productId == item.productId);

        if (!find) {
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else {
            find.amount++;
        }
        this._render();
	 }
	 
    remove(id) {
        let find = this.items.find(basketItem => basketItem.productId == id);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
	 }
	 
    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new BasketItem(item).render();
        });
        this.container.innerHTML = htmlStr;
	 }
	 
}

