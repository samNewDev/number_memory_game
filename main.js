$(document).ready(function() {
    function getDifficulty() {
        $('#submit').click(function () {
            var difficulty = $('#difficulty_choice').val();
            console.log(difficulty);
        })
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
});

