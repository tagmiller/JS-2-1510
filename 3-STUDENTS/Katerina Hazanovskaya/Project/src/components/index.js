import Basket from './basket.js';
import basket from './basket.js'
import catalog from './catalog.js'

export default () => {
	let basket = new Basket();
	let catalog = new Catalog(basket);
}