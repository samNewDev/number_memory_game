class MemoryCard extends HTMLElement{
    color;
    value;

    constructor() {
        super();
        this.randomValue();
        this.createListeners();
    }

    createListeners(){
        this.randomValue();
        this.setAttributes();
        var show = false ;
        this.onclick = function(){


            if (show === false){
                this.removeAttribute('style','background:'+this.color+';');
                show = true;
            }else {
                this.setAttribute('style','background:'+this.color+';')
                show = false;
            }

            var event = new CustomEvent('cardClicked', { 'detail' : this.value } );

            this.dispatchEvent(event);
        }
    }

    setAttributes(){
        this.setAttribute('style','background:'+this.color+';')
    }



    randomValue(){
        this.color = "black";

    }
}
window.customElements.define('memory-card', MemoryCard);
