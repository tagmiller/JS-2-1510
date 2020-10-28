class Stars{
    constructor(value) {
        this.value = value;
    }

    render() {
        return `
                <i class="${this.value > "0" ? "fas" : "far"} ${this.value === "0.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                <i class="${this.value > "1" ? "fas" : "far"} ${this.value === "1.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                <i class="${this.value > "2" ? "fas" : "far"} ${this.value === "2.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                <i class="${this.value > "3" ? "fas" : "far"} ${this.value === "3.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                <i class="${this.value > "4" ? "fas" : "far"} ${this.value === "4.5" ? "fa-star-half-alt" : "fa-star"}"></i>
            `;
    }
}

export default Stars;