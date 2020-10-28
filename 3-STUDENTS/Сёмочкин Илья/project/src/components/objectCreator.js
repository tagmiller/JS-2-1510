
export default class ObjectCreator {
    constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON' + url;
        this._init();
    }

    _get(url) {
        return fetch(url).then(d => d.json()) 
    }
}