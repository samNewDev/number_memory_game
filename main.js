$(document).ready(function() {
    function getDifficulty() {
        $('#submit').click(function () {
            var difficulty = $('#difficulty_choice').val();
            console.log(difficulty);
        })
    }
    function flipCard(){
        $('.flip-container .flipper').click(function() {
            $(this).closest('.flip-container').toggleClass('hover');
            $(this).css('transform, rotateY(180deg)');
        });
    }
    getDifficulty()
    flipCard()
});

