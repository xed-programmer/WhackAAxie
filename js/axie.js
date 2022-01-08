
// Initial Screen
// Game Playing Screen
// Game Over Screen

var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

function Axie(canvas){
    // Base
    var game = this;

    // Global Attributes
    game.canvas = canvas;
    game.context = game.canvas.getContext('2d');
    game.cWidth = game.canvas.width;
    game.cHeight = game.canvas.height;

    // Game State
    game.currentState = INITIAL;

}

Axie.prototype.start = function(){
    // base
    var game = this;

    // Start Game
    window.requestAnimationFrame(function(){
        game.runGameLoop();
    });
};

Axie.prototype.runGameLoop = function() {
    // base
    var game = this;

    // Game State
    switch(game.currentState) {
        case INITIAL:
            // Draw Initial Screen
            game.drawInitialScreen();
            break;
        case GAME_PLAYING:
            // Draw GAME PLAYING Screen
            game.drawGamePlayingScreen();
            break;
        case GAME_OVER:
            // Draw GAME OVER Screen
            game.drawGameOverScreen();
            break;
    }
};

Axie.prototype.drawInitialScreen = function() {
    // base
    var game = this;  

    // Draw 

    // Background
    game.context.fillStyle = 'black';
    game.context.fillRect(0,0, game.cWidth, game.cHeight);

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Ariel';
    game.context.fillText('INITIAL', game.cWidth / 2 - 100, game.cHeight / 2);
};

Axie.prototype.drawGamePlayingScreen = function() {
    // base
    var game = this;  

    // Draw 

    // Background
    game.context.fillStyle = 'black';
    game.context.fillRect(0,0, game.cWidth, game.cHeight);

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Ariel';
    game.context.fillText('GAME PLAYING', game.cWidth / 2 - 100, game.cHeight / 2);
};

Axie.prototype.drawGameOverScreen = function() {
    // base
    var game = this; 
    
    // Draw 

    // Background
    game.context.fillStyle = 'black';
    game.context.fillRect(0,0, game.cWidth, game.cHeight);

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Ariel';
    game.context.fillText('GAME OVER', game.cWidth / 2 - 100, game.cHeight / 2);
};