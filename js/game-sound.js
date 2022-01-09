
function GameSound (){
    // Base
    var gsound = this;
        
    gsound.ingame1 = new Audio('sounds/ingame1.mp3');
    gsound.ingame2 = new Audio('sounds/ingame2.mp3');    
    gsound.finish = new Audio('sounds/gamefinish.mp3');
    gsound.hit = new Audio('sounds/hit.mp3');
    gsound.missed = new Audio('sounds/miss.mp3');
}
