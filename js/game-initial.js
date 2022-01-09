
function GameInitial (canvas){
    // base 
    var ginitial = this;

    //Global Attributes
    ginitial.canvas = canvas;
    ginitial.context = ginitial.canvas.getContext('2d');

    ginitial.w = ginitial.canvas.width;
    ginitial.h = ginitial.canvas.height;

    // Background
    ginitial.bgsrc = 'images/gamebg.jpg';
    ginitial.bgimg = null;

    // Logo

    ginitial.logosrc = 'images/logo.png';
    ginitial.logoimg = null;

    // Create Background Image
    ginitial.create();
}

GameInitial.prototype.create = function (){
    // base
    var ginitial = this;

    // Create Iamage
    ginitial.bgimg = new Image();
    ginitial.bgimg.src = ginitial.bgsrc;
    
    ginitial.logoimg = new Image();
    ginitial.logoimg.src = ginitial.logosrc;
};


GameInitial.prototype.draw = function () {
    // base
    var ginitial = this;

    // Draw
    if(ginitial.bgimg != null){
        ginitial.context.drawImage(ginitial.bgimg, 0, 0, ginitial.w, ginitial.h);
    }

    if(ginitial.bgimg != null){
        ginitial.context.drawImage(ginitial.logoimg, (ginitial.w/2) - 150, 70, 320, 100);
    }
};