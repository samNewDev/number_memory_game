class MemoryCard extends HTMLElement{
    tabValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
    color;
    value;

    constructor() {
        super();
        this.randomValue();
        this.createListeners();
    }

    createListeners(){
        this.randomColor();
        this.setAttributes();
        var show = false ;
        this.onclick = function(){


            if (show === true){
                this.removeAttribute('style','background:'+this.color+';');
                show = false;
            }else {
                this.setAttribute('style','background:'+this.color+';')
                show = true;
            }

            var event = new CustomEvent('cardClicked', { 'detail' : this.value } );

            this.dispatchEvent(event);
            console.log(this.value);
        }
    }


    randomColor(){
        this.color = "black";

    randomValue(){
        this.value = this.tabValues[Math.floor( Math.random()* this.tabValues.length )];

    }
}
window.customElements.define('memory-card', MemoryCard);
