$(document).ready(function() {

    var tour = 1;
    var valeurA = 0;
    var valeurB = 0;

    function checkcard(){
        $('.flip-container .flipper').click(function() {
                if (tour === 1){
                    console.log($(this))
                    $(this).data.value = valeurA;
                    tour++;
                }
                if (tour === 2){
                    console.log($(this))
                    $(this).data.value = valeurB;
                }
            });


        Function loadImage(src){
            var img = new Image() ;
            img.src = « source.jpg »
return new Promise(function(resolve, reject){
    img.onload = function (){
        resolve(img) ;
    }
    img.onerror = function (){
        img.src = «sourcerror.jpg »
	resolve(img) ;
    }
}) ;


            loadImage(url)
                ,then(function(valeurOK){
                document.body.appendChild(valeurOK)
            })

    }



});

