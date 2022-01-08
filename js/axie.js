
// Initial Screen
// Game Playing Screen
// Game Over Screen

var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

var KEY_CODE = {
    R: 82,
};

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

    // Bind Events
    game.bindEvents();
    
    // Create Game Object
    game.createObjects();
}

Axie.prototype.createObjects = function() {
    // Base 
    var game = this;

     // Background
     game.background = new GameBackground('images/gamebg.jpg', game.canvas);

     // Score
     game.gscore = new GameScore(game.canvas);
     game.gscore.x = game.cWidth - 200;     
     game.gscore.y = 80;     
};

Axie.prototype.bindEvents = function() {
    // Base
    var game = this;

    // Mouse Listener
    game.canvas.addEventListener('click', function(event){        
        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                break;
            case GAME_PLAYING:
                
                break;
        }
    });

    // Key Listener
    window.addEventListener('keydown', function(event){
        switch (game.currentState) {
            case GAME_OVER:
                if(event.keyCode === KEY_CODE.R) {
                    game.currentState = GAME_PLAYING;
                }
                break;
        }
    });
};

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
    game.start();
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
    game.context.fillText('Click to Start!', game.cWidth / 2 - 100, game.cHeight / 2);
};

Axie.prototype.drawGamePlayingScreen = function() {
    // base
    var game = this;  

    // Clear Canvas
    game.context.clearRect(0,0, game.cWidth, game.cHeight);    

    // Draw Background
    game.background.draw();  
    
    // Draw Score
    game.gscore.draw();
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

    game.context.font = '24px Ariel';
    game.context.fillText('Press R to Restart', game.cWidth / 2 - 100, game.cHeight / 2 + 50);
};