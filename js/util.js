/*
*
*
 GLOBAL FUNCTIONS
*
*
*/

window.requestAnimFrame = function(){
    return window.requestAnimationFrame;
}

window.getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
}