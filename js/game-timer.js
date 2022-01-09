
function GameTimer(canvas) {
    // Base
    var gTime = this;
    
    // Global Aattributes
    gTime.canvas = canvas;
    gTime.context = gTime.canvas.getContext('2d');

    // Specification
    gTime.countdown = new Date();
    gTime.countdown.setSeconds(gTime.countdown.getSeconds() + 60);
    gTime.now = new Date();
    gTime.distance = (gTime.countdown.getTime() - gTime.now.getTime());
    gTime.timer = Math.floor(gTime.distance / 1000);
    gTime.isFinished = false;
    gTime.x = 0;
    gTime.y = 0;

}

GameTimer.prototype.timeLeft = function (){
    // Base 
    var gTime = this;

    gTime.now = new Date();
    gTime.distance = (gTime.countdown.getTime() - gTime.now.getTime());
    gTime.timer = Math.floor(gTime.distance / 1000);  
};

GameTimer.prototype.draw = function () {
    // Base 
    var gTime = this;

    if(!gTime.isFinished){
        gTime.timeLeft();
    }    

    // Draw
    gTime.context.font = '45 Verdana';
    gTime.context.fillText('Time Left: ' + gTime.timer + 's', gTime.x, gTime.y);
}

GameTimer.prototype.start = function() {
    // Base 
    var gTime = this;
    gTime.isFinished = false;
    gTime.countdown = new Date();
    gTime.countdown.setSeconds(gTime.countdown.getSeconds() + 60);
    gTime.draw();
}
GameTimer.prototype.stop = function() {
    // Base 
    var gTime = this;
    gTime.isFinished = true;
    gTime.timer = 1;
}