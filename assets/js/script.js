

var number = 69
var game = null


$(function(){

    $('#game').submit(function(event){
        game = $('#number').val();


             if(game == number) {
                alert('gagné !')}

             else if (game < number){
                alert("c'est plus !")}

             else {
                alert("c'est moins !")}
                
    
        event.preventdefault();  
    });



});
