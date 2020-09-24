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
        this.color = "black";
    }
}
window.customElements.define('memory-card', MemoryCard);
