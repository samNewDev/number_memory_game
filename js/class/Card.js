class MemoryCard extends HTMLElement{
    isVisible = false;
    value;
    isBlocked = false;
    ref;

    constructor(ref) {
        super();
        this.ref = ref;
        this.innerHTML = '<span>'+ref+'</span>';
        this.hide();
        this.createListeners();
    }

    show(){
        var me = this;
        this.isVisible = true;
        this.setAttribute('style','background:white;');
        setTimeout(function(){
            me.hide();
        }, 2000);
    }
    hide(){
        if (this.isBlocked) {
            return ;
        }
        this.isVisible = false;
        this.setAttribute('style','background:black;');
    }
    createListeners(){
        var me = this;
        this.onclick = function(){
            if (me.isVisible) {
                me.hide();
            }else {
                me.show();
                var event = new CustomEvent('cardClicked', { 'detail' : this.ref } );
                me.dispatchEvent(event);
            }
        }
    }
}
window.customElements.define('memory-card', MemoryCard);
