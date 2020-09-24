$(document).ready(function() {

    // recupere la valeur selectionee dans le select
    function getDifficulty() {
        $('#submit').click(function () {
            var difficulty = $('#difficulty_choice').val();
            console.log(difficulty);
        })
    }
    function getNbClick() {
        var clicks = 0;
        $('.flip-container').click(function() {
            clicks++; 
            console.log($(clicks));
            if (clicks === 2) {
                clicks = 0;
            }
        });
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
    getNbClick()

    function doSomething(ev) {
        console.log(ev);
    }


var container = document.getElementById("container");
var card = new MemoryCard();

card.addEventListener('cardClicked', function(ev){
    doSomething(ev);
})
container.appendChild(card);

});

