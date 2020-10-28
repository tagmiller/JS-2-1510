export default class PatentClass {
    constructor(container, url, template_item) {
        this.template_item = template_item
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this._init();

    }

    _init() {
        this._get(this.url)
        .then(items => {
            if (items.hasOwnProperty('content')){
                this.items = items.content
            } else {
                this.items = items;
            }
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })
    }

    _get(url) {
        return fetch(url).then(d => d.json())
    }

    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new this.template_item(item).render();
        });
        this.container.innerHTML = htmlStr;
    }
}
