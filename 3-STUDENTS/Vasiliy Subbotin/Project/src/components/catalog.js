import CatalogItem from './catalogitem.js';
import ParentClass from './parentclass';

export default class Catalog extends ParentClass {
    constructor(basket, container, url) {
        super('#catalog', '/catalog.json', CatalogItem)
        this.basket = basket;
    }
    
    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                this.basket.add({
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                })
            }
        })
    }
}