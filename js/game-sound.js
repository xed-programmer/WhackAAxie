
function GameSound (){
    // Base
    var gsound = this;
    // gsound.ingame1 = document.getElementById('soundingame1');
    // gsound.ingame2 = document.getElementById('soundingame2');
    gsound.ingame1 = new Audio('sounds/ingame1.mp3');
    gsound.ingame2 = new Audio('sounds/ingame2.mp3');    
    gsound.finish = new Audio('sounds/gamefinish.mp3');
}

GameSound.prototype.playAudio = function(audio) {
    // Base 
    var gsound = this;
    
    gsound.ingame1.pause();
    gsound.ingame2.pause();
    gsound.finish.pause();  
    
    audio.play();    
}