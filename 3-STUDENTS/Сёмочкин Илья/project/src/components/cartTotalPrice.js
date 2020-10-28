export default class CartTotalPrice {
    constructor(items) {
        this.items = items; 
    }

    totalPrice() {
        let sum = 0;
        for(let item of this.items) {
            sum += item.productPrice * item.amount;
        }
        return sum;
    }

    render() {
        return `
                <div class="cart-dropdown__sum">
                    <div>total</div>
                    <div>$${this.totalPrice()}</div>
                </div>
            `
    }
}