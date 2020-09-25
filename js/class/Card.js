class MemoryCard extends HTMLElement{
    tabValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];
    color;
    value;

    constructor() {
        super();
        this.randomValue();
    //    this.createListeners();
    }

/*    createListeners(){
        this.randomValue();
        //this.setAttributes();
        var show = false ;
        this.onclick = function(){


            if (show === true){
                this.removeAttribute('style','background:'+this.color+';');
                show = false;
            }else {
                this.setAttribute('style','background:'+this.color+';')
                show = true;
            }


            console.log("toto:"+this.value);
        }
    }*/




    randomValue(){
        this.value = this.tabValues[Math.floor( Math.random()* this.tabValues.length )];
        this.color = "black";

    }
}
window.customElements.define('memory-card', MemoryCard);
