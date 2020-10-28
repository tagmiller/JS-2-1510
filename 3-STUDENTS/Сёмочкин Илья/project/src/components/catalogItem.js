export default class CatalogItem {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `
                <div class="featured-items__item">
                    <div class="featured-items__item-top"><img src="${this.item.productImg}" alt="t-shirt">
                        <div class="add-hover-div">
                            <div>
                                <button name="add"
                                    data-id="${this.item.productId}"
                                    data-name="${this.item.productName}"
                                    data-img="${this.item.productImg}"
                                    data-price="${this.item.productPrice}">
                                <img src="../src/assets/img/cart_small.png" alt="cart_small">Add to Cart</button>
                                <a href="#"><i class="fas fa-retweet"></i></a>
                                <a href="#"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="featured-items__item-bottom">
                        <div>${this.item.productName}</div>
                        <div>$${this.item.productPrice}.00</div>
                    </div>
                </div>
            `;
    }
}