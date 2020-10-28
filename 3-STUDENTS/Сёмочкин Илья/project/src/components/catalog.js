import ObjectCreator from './objectCreator.js'
import CatalogItem from './catalogItem.js';


export default class Catalog extends ObjectCreator {
    constructor(cart, container = '#items-catalog', url = '/catalog.json', items) {
        super(container, url, items)
        this.cart = cart;
    }

    _init() { 
        this._get(this.url) 
        .then(items => { 
            this.items = items;
        })
        .then(() => { 
            this._render();
            this._handleEvents();
        })
    }

    _handleEvents() {
        this.container.addEventListener('click', evt => { 
            if (evt.target.name == 'add') {
                this.cart._add({
                    productId: evt.target.dataset.id,
                    productName: evt.target.dataset.name,
                    productImg: evt.target.dataset.img,
                    productPrice: +evt.target.dataset.price
                }); 
            }
        })
    }                        

    _render() { 
        let htmlStr = ''; 
        this.items.forEach(item => {
            htmlStr += new CatalogItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }
}
       