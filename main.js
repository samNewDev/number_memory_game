$(document).ready(function () {

    var difficulty;
    var tab = [];
    var container = document.getElementById("container");
    var cardSelected = null;

    function flipCard() {
        $('memory-card').click(function () {
            //let val = $(this).attr("data-value")
            var text = $(this).text()
            console.log(text)
            //$(this).closest('.flip-container').toggleClass('hover');
            //$(this).css('transform, rotateY(180deg)');
        });
    }


    /*
        function doSomething(ev) {
            console.log(ev);
        }*/

    function getDifficulty() {
        $('#start').click(function () {
            difficulty = $('#difficulty_choice').val();
            console.log('difficulty' + difficulty);
            initGame();
        })

    }

    function getNbClick() {
        var clicks = 0;
        $('.flip-container').click(function () {
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
        $('#reset').click(function () {
            location.reload();
        })
    }

    function initGame() {
        generateCard();
        shuffle();

    }

    function shuffle() {
        for (let i = tab.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [tab[i], tab[j]] = [tab[j], tab[i]];
        }
        implementCards();
    }

    function implementCards() {
        for (let i = 0; i < tab.length; i++) {
            let card = tab[i];
            container.appendChild(card);
            card.addEventListener('cardClicked', function (ev) {
                cardIsClicked(ev);
            });
        }
    }

    function generateCard() {
        for (let i = 0; i < difficulty; i++) {
            let card1 = new MemoryCard(i + 1);
            let card2 = new MemoryCard(i + 1);
            tab.push(card1, card2);
        }
    }

    // //var val = card.value;
    // //récupération de la valeur de la carte
    //     card.onclick = (function(){
    //         this.setAttribute('id','carteencours')
    //         var valeurcard = document.getElementById('carteencours')
    //         var strvaleur = valeurcard.innerText || valeurcard.textContent;
    //         console.log("strvaleur"+strvaleur);
    //         cardIsClicked(strvaleur);
    //     });
    //  //Promesse
    var inter;

    function cardIsClicked(ev) {
        promiseMyTwin(ev.detail)
            .then(function (result) {
                cardSelected = null;
                if (result.win) {
                    tab.map( function(card){
                        if (card.ref === result.cardSelected || card.ref === result.cardClicked) {
                            card.isBlocked = true;
                        }
                        return card;
                    });
                    console.log('GAGNE');
                } else {
                    console.log('PERDU');
                }
                checkTotal();
            }).catch(function (err) {
            console.log(err);
        });
    }

    function checkTotal(){
        blockedCardTab = tab.filter( function(card){
            return card.isBlocked;
        });
        if (blockedCardTab.length === tab.length){
            console.log("WIN GAME");
        }
    }
    function promiseMyTwin(strvaleur) {
        return new Promise(function (resolve, reject) {
            if (!cardSelected) {
                cardSelected = strvaleur;
                inter = setTimeout(function () {
                    resolve({win: false});
                }, 5000);
            } else {
                clearTimeout(inter);
                if (cardSelected === strvaleur) {
                    resolve({win: true, cardSelected: cardSelected, cardClicked: strvaleur});
                } else {
                    resolve({win: false});
                }
            }
        });
    }

//var card = new MemoryCard();
//var val = card.value
//container.appendChild(card);

//shuffle(tab);

//card.append(val)
    start();
    getDifficulty();
    //getNbClick();
    reset();
    flipCard();
});

