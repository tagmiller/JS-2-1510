export default class CartItem {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `
                <div class="cart-dropdown__checked-items">
                    <img src="${this.item.productImg}" alt="pic">
                    <div>
                        <h3>${this.item.productName}</h3>
                        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                        <p>${this.item.amount} x $${this.item.productPrice}</p>
                    </div>
                    <button data-id=${this.item.productId} name="remove" class="fas fa-times-circle"></button>
                </div>
            `;
    }
}