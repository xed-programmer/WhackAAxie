
function GameOver(canvas){
    // base 
    var gover = this;

    //Global Attributes
    gover.canvas = canvas;
    gover.context = gover.canvas.getContext('2d');

    gover.w = gover.canvas.width;
    gover.h = gover.canvas.height;

    // Background
    gover.bgsrc = 'images/gamebg.jpg';
    gover.bgimg = null;

    // Logo

    gover.logosrc = 'images/logo.png';
    gover.logoimg = null;

    // Create Background Image
    gover.create();
}

GameOver.prototype.create = function (){
    // base
    var gover = this;

    // Create Iamage
    gover.bgimg = new Image();
    gover.bgimg.src = gover.bgsrc;
    
    gover.logoimg = new Image();
    gover.logoimg.src = gover.logosrc;
};


GameOver.prototype.draw = function () {
    // base
    var gover = this;

    // Draw
    if(gover.bgimg != null){
        gover.context.drawImage(gover.bgimg, 0, 0, gover.w, gover.h);
    }

    if(gover.bgimg != null){
        gover.context.drawImage(gover.logoimg, (gover.w/2) - 150, 70, 320, 100);
    }
};