$(document).ready(function() {


    var tab = [];

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

    function doSomething(ev) {
        console.log(ev);
    }

    function shuffle(tab) {
        for (let i = tab.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
        [tab[i], tab[j]] =    [tab[j], tab[i]] ;
        }
        console.log(tab)
    }

var container = document.getElementById("container");
var card = new MemoryCard();
card.randomColor()

card.addEventListener('cardClicked', function(ev){
    doSomething(ev);
})
container.appendChild(card);
shuffle(tab);

});

