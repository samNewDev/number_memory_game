class MemoryCard extends HTMLElement{
    tabValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
    value;

    constructor() {
        super();
        this.randomValue();
        this.createListeners();
    }

    createListeners(){
        this.onclick = function(){
            var event = new CustomEvent('cardClicked', { 'detail' : this.value } );
            this.dispatchEvent(event);
            console.log(this.value);
        }
    }

    randomValue(){
        this.value = this.tabValues[Math.floor( Math.random()* this.tabValues.length )];
    }
}
window.customElements.define('memory-card', MemoryCard);
