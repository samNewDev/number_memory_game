$(document).ready(function() {

    var difficulty;
    var tab = ["c'est","vraiment","du","sale","le","tmax","en","y","mamene","!"];

    // recupere la valeur selectionee dans le select
    function getDifficulty() {
        $('#start').click(function () {
            difficulty = $('#difficulty_choice').val();
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

    var tabVals  = [];
    function generateCard(){

        for (var i = 0; i < difficulty; i++ ){
            var card1 = new MemoryCard();
            //let card2 = new MemoryCard();
            tab.push(card1);
            var card2 = new MemoryCard();
            card1.append(i + 1);
            card2.append(i + 1);
            tabVals.push('tabVals' + (i+1));
            tab.push(card1);
            tab.push(card2);
        }
        console.log(tab)
        console.log(tabVals)
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
    generateCard();

    function shuffle(tab) {
        for (let i = tab.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
        [tab[i], tab[j]] =    [tab[j], tab[i]] ;
        }
        console.log("tab:"+tab)
        implementCards()
    }
    function implementCards() {
        for (let i = 0; i< tab.length; i++){
            let el = tab[i];
            // a supprimer
            container.append(el);
           // container.appendChild(el);
        }
    }

var container = document.getElementById("container");
var card = new MemoryCard();

var val = card.value;
//récupération de la valeur de la carte
        card.onclick = (function(){
        this.setAttribute('id','carteencours')
        var valeurcard = document.getElementById('carteencours')
        var strvaleur = valeurcard.innerText || valeurcard.textContent;
        console.log("strvaleur"+strvaleur);
        cardIsClicked(strvaleur);
    });

 //Promesse


    var cardSelected = null;
    var inter;

    function cardIsClicked(strvaleur){
        promiseMyTwin(strvaleur)
            .then(function(result){
                cardSelected = null;
                if (result.win) {
                    console.log('GAGNE');
                }else{
                    console.log('PERDU');
                }
            }).catch( function(err){ console.log(err);});
    }
    function promiseMyTwin(strvaleur) {
        return new Promise(function(resolve, reject){
            if (!cardSelected) {
                cardSelected = strvaleur;
                inter = setTimeout( function(){
                    resolve( { win : false } );
                }, 5000);
            } else {
                clearTimeout(inter);
                if (cardSelected === strvaleur){
                    resolve( { win : true , cardSelected: cardSelected, cardClicked :strvaleur } );
                } else {
                    resolve( { win : false } );
                }
            }
        });
    }

container.appendChild(card);

shuffle(tab);

card.append(val)






});

