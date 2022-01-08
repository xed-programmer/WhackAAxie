window.onload = function(){
    // Canvas Definitions
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var cWidth = canvas.width;
    var cHeight = canvas.height;

    // Game Object
    var axie = new Axie(canvas);
    axie.start();

}