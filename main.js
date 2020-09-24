$(document).ready(function() {

    var difficulty;
    var tab = [];
    var container = document.getElementById("container");


    /*    function flipCard(){
            $('.flip-container .flipper').click(function() {
                //let val = $(this).attr("data-value")
                console.log($(this))
                $(this).closest('.flip-container').toggleClass('hover');
                $(this).css('transform, rotateY(180deg)');
            });
        }*/


    /*
        function doSomething(ev) {
            console.log(ev);
        }*/

    function getDifficulty() {
        $('#start').click(function () {
            difficulty = $('#difficulty_choice').val();
            console.log('difficulty'+difficulty);
            initGame()
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

    function start() {
       $('#start').click(function () {
            $('.container, #reset').attr('style', 'display:flex')
            $('.selection').hide()
        })
    }

    function reset() {
        $('#reset').click( function(){
            location.reload()
        })
    }
    function initGame() {
        generateCard()
        shuffle(tab)


    }

    function shuffle(tab) {
        for (let i = tab.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
        [tab[i], tab[j]] =    [tab[j], tab[i]] ;
        }
        console.log(tab)
        implementCards()
    }
    function implementCards() {
        console.log('tablengh'+tab.length)
        for (let i = 0; i< tab.length; i++){
            let el = tab[i];
            let val = el.value
            console.log(val)
           container.appendChild(el);
            el.append(val)
        }
    }

    function generateCard(){

        for (let i = 0; i < difficulty; i++ ){
            let card1 = new MemoryCard();
            //let card2 = new MemoryCard();
            tab.push(card1);
            tab.push(card1);
        }
        console.log(tab)
    }

//var card = new MemoryCard();
//var val = card.value


/*card.addEventListener('cardClicked', function(ev){
    doSomething(ev);
})*/
//container.appendChild(card);

//shuffle(tab);

//card.append(val)
    generateCard()
    start()
    getDifficulty()
    getNbClick()
    reset()
    //flipCard()
});

