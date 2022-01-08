
function GameScore(canvas) {
    // Base
    var gscore = this;
    
    // Global Aattributes
    gscore.canvas = canvas;
    gscore.context = gscore.canvas.getContext('2d');

    // Specification
    gscore.start = new Date();
    gscore.score = 0;
    gscore.x = 0;
    gscore.y = 0;

}

GameScore.prototype.draw = function () {
    // Base 
    var gscore = this;

    // Draw
    gscore.context.font = '45 Verdana';
    gscore.context.fillText('Score: ' + gscore.score, gscore.x, gscore.y);
}