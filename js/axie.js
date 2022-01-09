
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
    game.boundings = game.canvas.getBoundingClientRect();
    game.combo = 1;

    // Timer
    game.timer = null;

    // Mouse Coordinates
    game.mouseDownX = 0;        
    game.mouseDownY = 0; 
    game.mouseX = 0;
    game.mouseY = 0;       

    // Game State
    game.currentState = INITIAL;

    // Bind Events
    game.bindEvents();
    
    // Create Game Object
    game.createObjects();
    
    // Loop the change position of Axie if not being hit within time interval
    game.counter = 3000;
    // game.axieChangePositionInterval = function(){
        
    //     clearInterval(interval);

    //     if(parseInt(game.gtimer.timer) > 40){
    //         game.counter = 3000;
    //     }else if(parseInt(game.gtimer.timer) > 20){
    //         game.counter = 2000;
    //     }else if(parseInt(game.gtimer.timer) > 0){
    //         game.counter = 1000;
    //     }
    //     game.monster.changePosition();
    //     interval = setInterval(game.axieChangePositionInterval, game.counter);
    // };    
    
    // var interval = setInterval(game.axieChangePositionInterval, game.counter); 
    game.axieChangePositionInterval = setInterval(()=>{
        if(parseInt(game.gtimer.timer) > 40){
            game.counter = 3000;
        }else if(parseInt(game.gtimer.timer) > 20){
            game.counter = 2000;
        }else if(parseInt(game.gtimer.timer) > 0){
            game.counter = 1000;
        }
        console.log(game.counter);
        game.monster.changePosition();
    }, game.counter);
}

Axie.prototype.createObjects = function() {
    // Base 
    var game = this;

     // Background
     game.background = new GameBackground('images/gamebg.jpg', game.canvas);

     // Game Initial
     game.ginitial = new GameInitial(game.canvas);

     // Game Over
     game.gover = new GameOver(game.canvas);

     // Score
     game.gscore = new GameScore(game.canvas);
     game.gscore.x = game.cWidth - 200;     
     game.gscore.y = 80;

     // Timer
     game.gtimer = new GameTimer(game.canvas);
     game.gtimer.x = 50;     
     game.gtimer.y = 80;

     // Monster
     game.monster = new Monster('images/monster.png', game.canvas);

     // Sounds
     game.gsound = new GameSound();   
     
     // Hammer
     game.hammerimg = new Image();
     game.hammerimg.src = 'images/hammer.png';     
};

Axie.prototype.bindEvents = function() {
    // Base
    var game = this;

    // Mouse Listener
    game.canvas.addEventListener('click', function(e){
        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                game.gtimer.start();
                break;
            case GAME_PLAYING:
                game.mouseDownX = e.clientX - game.boundings.left;
                game.mouseDownY = e.clientY - game.boundings.top;

                // Check if Axie is hit
                game.checkAxieCollision(game.mouseDownX, game.mouseDownY);
                break;
        }        
    });

    game.canvas.addEventListener('mousemove', (e)=>{

        switch (game.currentState) {
            case GAME_PLAYING:
                game.mouseX = e.clientX - game.boundings.left - 20;
                game.mouseY = e.clientY - game.boundings.top - 20;    
                break;
        }             
    });

    // Key Listener
    window.addEventListener('keydown', function(event){
        switch (game.currentState) {
            case GAME_OVER:                
                if(event.keyCode === KEY_CODE.R) {
                    game.currentState = GAME_PLAYING;
                    game.gtimer.start();
                }
                break;
        }
    });
};

Axie.prototype.checkAxieCollision = function(mx, my) {
    // Base
    var game = this;
    var monster = game.monster;

    var colMouseX = Math.pow(((monster.x + (monster.w/2)) - mx), 2);
    var colMouseY = Math.pow(((monster.y + (monster.h/2)) - my), 2);    

    if((Math.sqrt(colMouseX+ colMouseY)) < (monster.w/2)){
        game.gsound.hit.play();
        game.gscore.score += (10 * game.combo);
        game.monster.changePosition();
        
        clearInterval(game.axieChangePositionInterval);

        // Increase the Speed of changing position of axie
        game.axieChangePositionInterval = setInterval(()=>{
            if(parseInt(game.gtimer.timer) > 40){
                game.counter = 3000;
            }else if(parseInt(game.gtimer.timer) > 20){
                game.counter = 2000;
            }else if(parseInt(game.gtimer.timer) > 0){
                game.counter = 1000;
            }
            console.log(game.counter);            
            game.monster.changePosition();
        }, game.counter);        
        // interval = setInterval(game.axieChangePositionInterval, game.counter);
        if(game.combo < 4){
            game.combo++;
        }
    }else{
        // If missed, Deduct 10 to the score
        game.gsound.missed.play();
        game.gscore.score -= 10;        
        game.combo = 1;
    }    
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

    if(parseInt(game.gtimer.timer) <= 0){
        game.currentState = GAME_OVER;
        game.gtimer.stop();
        clearInterval(game.axieChangePositionInterval);
    }

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

    // Clear Canvas
    game.context.clearRect(0,0, game.cWidth, game.cHeight);    

    // Background
    game.ginitial.draw();

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Ariel';
    game.context.fillText('Click to Start!', game.cWidth / 2 - 100, game.cHeight / 2);    
    
    game.gsound.ingame1.play();
    game.gsound.ingame2.pause();  
    game.gsound.finish.pause();  
};

Axie.prototype.drawGamePlayingScreen = function() {
    // base
    var game = this; 
    
    game.gsound.ingame2.play();  
    game.gsound.ingame1.pause();    
    game.gsound.finish.pause(); 

    // Clear Canvas
    game.context.clearRect(0,0, game.cWidth, game.cHeight);    

    // Draw Background
    game.background.draw();  
    
    // Draw Score
    game.gscore.draw();

    // Draw Timer
    game.gtimer.draw();

    // Draw Monster
    game.monster.draw();

    game.context.drawImage(game.hammerimg, game.mouseX, game.mouseY, 80, 80);
};

Axie.prototype.drawGameOverScreen = function() {
    // base
    var game = this;     

    game.gsound.finish.play(); 
    game.gsound.ingame1.pause();
    game.gsound.ingame2.pause();  

    // Clear Canvas
    game.context.clearRect(0,0, game.cWidth, game.cHeight); 

    // Background
    game.gover.draw();

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Ariel';
    game.context.fillText('Time\'s Up!', game.cWidth / 2 - 100, game.cHeight / 2 - 50);
 
    game.context.font = '36px Ariel';
    game.context.fillText('Your Final Score is ' + game.gscore.score, game.cWidth / 2 - 200, game.cHeight / 2);

    game.context.font = '24px Ariel';
    game.context.fillText('Press R to Restart', game.cWidth / 2 - 100, game.cHeight / 2 + 50);
    game.gscore.score = 0;    
};

