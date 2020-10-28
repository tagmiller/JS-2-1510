import ObjectCreator from './objectCreator.js'
import CartItem from './cartItem.js'
import CartTotalPrice from './cartTotalPrice.js'

export default class Cart extends ObjectCreator {
    constructor(container = '#checked-items', url = '/cart.json', items) {
        super(container, url, items)
        this.wrapper = document.querySelector('.cart-dropdown');
        this.qtyContainer = document.querySelector('#qty');
    }
    
    _init() {
        this._get(this.url)
        .then(cartObject => {
            this.items = cartObject.content;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })
    }

    _handleEvents() {
        document.querySelector('#toggle-cart').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden')
        })

        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this._remove(evt.target.dataset.id)
            }
        })
    }

    _add(item) {
        let find = this.items.find(cartItem => cartItem.productId == item.productId);

        if (!find) { 
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else { 
            find.amount++;
        }
        this._render();
    }

    _remove(id) {
        let find = this.items.find(cartItem => cartItem.productId == id);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1)
        }
        this._render();
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new CartItem(item).render();
        })
        htmlStr += new CartTotalPrice(this.items).render();
        this.container.innerHTML = htmlStr;
        this.qtyContainer.innerHTML = this._totalQty();
    }

    _totalQty() {
        let qty = 0;
        for(let item of this.items) {
            qty += item.amount;
        }
        return qty;
    }
}
