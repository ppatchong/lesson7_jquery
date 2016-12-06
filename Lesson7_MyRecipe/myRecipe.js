/*
Program Name: Recipe Display Application
Author: Patricia Patchong
Date:December 5, 2016
Filename: myRecipe.js
*/

//displays the content of p elements in brown

$("h3").next().children().css("color", "brown");

//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked

//$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
    
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
 
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked

$("h3").click(display2);

//change the size and opacity of the image when mouse hovers over it

$("img").hover(function() {
    $(this).animate({
            opacity: '0.5',
            height: '+=150px',
            width: '+=150px'
        });
}, function() {
    $(this).animate({
            opacity: '100',
            height: '-=150px',
            width: '-=150px'
        });
});

/*$("h3").hover(function() {
    $(this).css("background-color", "yellow");
}, function() {
    $(this).css("background-color", "pink");
});
*/
//hover() will trigger display2 method each time mouse hovers over header

$("h3").hover(display2);


