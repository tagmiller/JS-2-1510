export default class Defparam {
	constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/' + url;
        this._init();
    }

    _get(url) {
        return fetch(url).then(d => d.json()) 
    }

    _init() {
        

        this._get(this.url)
            .then(basketObject => {
                this.items = basketObject.content
            })
            .then(() => {
                this._render();
                this._handleEvents();
            })
    }
} 