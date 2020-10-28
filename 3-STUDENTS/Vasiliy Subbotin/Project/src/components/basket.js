import BasketItem from './basketitem.js'
import ParentClass from './parentclass'

export default class Basket extends ParentClass{
    constructor(container, url, template_item) {
        super('#basket', '/basket.json', BasketItem)
        this.wrapper = document.querySelector('.drop-cart');
        }

    _handleEvents() {
        document.querySelector('#toggle-basket').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden');
            // console.log(this)
        });

        this.container.addEventListener('click', e => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset.id)
            }
        })
    }
    add(item) {
        // console.log('add ' + item.productName)
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
}