
function Monster(src, canvas) {
    // Base
    var monster = this;

    // Global Attributes
    monster.canvas = canvas;
    monster.context = monster.canvas.getContext('2d');
    monster.boundings = monster.canvas.getBoundingClientRect();

    // Specification
    monster.xPositions = [440,674,908, 386, 577, 771, 961, 429, 675, 919];
    monster.yPositions = [166, 166, 166, 284, 284, 284, 284, 450, 450, 450];
    // monster.xPositions = [397,630,866, 344, 537, 727, 920, 389, 633, 877];
    // monster.yPositions = [241, 241, 241, 350, 350, 350, 350, 518, 518, 518];
    monster.position = 0;
    monster.x = 0;
    monster.y = 0;
    monster.w = 80;
    monster.h = 80;
    monster.src = src;
    monster.img = null;
    monster.frame = 0;

    // Create Monster
    monster.create();
    monster.changePosition();
}

Monster.prototype.changePosition = function() {
    // Base
    var monster = this;
    monster.position = getRandomInt(0, 10);
    monster.x = monster.xPositions[monster.position] - monster.boundings.left - (monster.w/2);
    monster.y = monster.yPositions[monster.position] - monster.boundings.top - monster.h;
    // monster.x = monster.xPositions[monster.position] - monster.boundings.left;
    // monster.y = monster.yPositions[monster.position] - monster.boundings.top;
}

Monster.prototype.create = function() {
    // Base
    var monster = this;


    // Create Image
    monster.img = new Image();
    monster.img.src = monster.src;
};

Monster.prototype.draw = function () {
    // Base
    var monster = this;

    // Draw
    if(monster.img != null){
        monster.context.drawImage(monster.img, monster.frame * 255, 0, 255, 255, monster.x, monster.y, monster.w, monster.h);        
        // monster.frame %= 4;
        if(monster.frame < 2){
            monster.frame++;
        }        
    }
};