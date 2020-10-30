class MobileMenu{
    constructor(){
        this.DOM = {};
        this.DOM.btn = document.querySelector('.menu');
        this.DOM.cover = document.querySelector('.cover');
        this.DOM.container = document.querySelector('#global-container');
        this.getEvent = this._getSerch();
        this._addEvent();

        
    }
    _getSerch(){
       return window.ontouchstart ? 'ontouchstart': 'click';
    }
    _toggle(){
        this.DOM.container.classList.toggle('menu-open');
    }
    _addEvent(){
        this.DOM.btn.addEventListener(this.getEvent, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.getEvent, this._toggle.bind(this));
    }
}

new MobileMenu();