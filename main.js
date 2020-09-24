$(document).ready(function() {
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
    function flipCard(){
        $('.flip-container .flipper').click(function() {
            //let val = $(this).attr("data-value")
            console.log($(this))
            $(this).closest('.flip-container').toggleClass('hover');
            $(this).css('transform, rotateY(180deg)');
        });
    }
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
});

