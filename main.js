$(document).ready(function() {

    var difficulty;
    var tab = [];
    var container = document.getElementById("container");


    function flipCard(){
        $('memory-card').click(function() {
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
            //el.append(val)
        }
    }
    function generateCard(){

        for (let i = 0; i < difficulty; i++ ){
            let card1 = new MemoryCard();
            let card2 = new MemoryCard();
            card1.append(i + 1);
            card2.append(i + 1);
            tab.push(card1);
            tab.push(card2);
        }
        console.log(tab)
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
    //     var cardSelected = null;
    //     var inter;
    //     function cardIsClicked(strvaleur){
    //         promiseMyTwin(strvaleur)
    //             .then(function(result){
    //                 cardSelected = null;
    //                 if (result.win) {
    //                     console.log('GAGNE');
    //                 }else{
    //                     console.log('PERDU');
    //                 }
    //             }).catch( function(err){ console.log(err);});
    //     }
    //     function promiseMyTwin(strvaleur) {
    //         return new Promise(function(resolve, reject){
    //             if (!cardSelected) {
    //                 cardSelected = strvaleur;
    //                 inter = setTimeout( function(){
    //                     resolve( { win : false } );
    //                 }, 5000);
    //             } else {
    //                 clearTimeout(inter);
    //                 if (cardSelected === strvaleur){
    //                     resolve( { win : true , cardSelected: cardSelected, cardClicked :strvaleur } );
    //                 } else {
    //                     resolve( { win : false } );
    //                 }
    //             }
    //         });
    //     }
//var card = new MemoryCard();
//var val = card.value
//container.appendChild(card);

//shuffle(tab);

//card.append(val)
    generateCard()
    start()
    getDifficulty()
    getNbClick()
    reset()
    flipCard()
});

