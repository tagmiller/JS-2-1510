import Cart from './cart.js'
import Catalog from './catalog.js'


export default () => {
    let cart = new Cart();
    let catalog = new Catalog(cart);
}