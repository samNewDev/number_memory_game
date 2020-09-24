class MemoryCard extends HTMLElement{
    tabColors = ['red','white','blue','green','yellow']
    color;
    constructor() {
        super();
        this.randomColor();
        this.setAttributes();
        this.createListeners();
    }

    createListeners(){
        this.onclick = function(){
            this.changeColor();
            var event = new CustomEvent('cardClicked', { 'detail' : this.color } );
            this.dispatchEvent(event);
        }
    }
    setAttributes(){
        this.setAttribute('style','background:'+this.color+';')
    }

    changeColor(){
        this.randomColor();
        this.setAttributes();
    }

    randomColor(){
        this.color = this.tabColors[Math.floor( Math.random()* this.tabColors.length )];
    }
}
window.customElements.define('memory-card', MemoryCard);
