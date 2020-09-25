$(document).ready(function() {

    // recupere la valeur selectionee dans le select
    function getDifficulty() {
        $('#submit').click(function () {
            var difficulty = $('#difficulty_choice').val();
            console.log(difficulty);
        })
    }
    /*
    **
    *  $this est le contexte ou est appele le code, dans notre cas c'est la 'card' qui a ete cliauee qui l'appelle
    */
    function flipCard(){
        $('.flip-container .flipper').click(function() {
            //let val = $(this).attr("data-value")
            console.log($(this))
            $(this).closest('.flip-container').toggleClass('hover');
            $(this).css('transform, rotateY(180deg)');

        });
    }

    // pour l'instant cette fonction ne fait que faire disparaitre le "pseudo-formulaire"
    // et faire apparaitre les cartes quand le button start est actionne
    function start() {
        $('#start').click(function () {
            $('.container').attr('style', 'display:flex')
            $('.selection').hide()
        })
    }
    start()
    getDifficulty()
    flipCard()

    var cardSelected = null;
    var inter;

    function cardIsClicked(ev){
        promiseMyTwin(ev)
            .then(function(result){
                cardSelected = null;
                if (result.win) {
                    cards.map( function(c){
                        if (c.ref === result.cardSelected.ref || c.ref === result.cardClicked.ref) {
                            c.blocked = true;
                        }
                        return c;
                    });
                    console.log('GAGNE');
                }else{
                    console.log('PERDU');
                }
            }).catch( function(err){ console.log(err);});
    }
    function promiseMyTwin(ev) {
        return new Promise(function(resolve, reject){
            if (!cardSelected) {
                cardSelected = ev.detail;
                inter = setTimeout( function(){
                    resolve( { win : false } );
                }, 5000);
            } else {
                clearTimeout(inter);
                if (cardSelected.color === ev.detail.color ){
                    resolve( { win : true , cardSelected: cardSelected, cardClicked : ev.detail } );
                } else {
                    resolve( { win : false } );
                }
            }
        });
    }


var container = document.getElementById("container");
var card = new MemoryCard();

card.addEventListener('cardClicked', function(ev){
    cardIsClicked(ev);
})
container.appendChild(card);

});

