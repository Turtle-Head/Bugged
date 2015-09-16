// Main game object definitions
var GameObjects = function(x, y, imageInfo){
  this.x = x;
  this.y = y;
  this.imageInfo = imageInfo;
}

var badGuys = {
  imageInfo: 'images/enemy-bug.png',
  width: 101,
  height: 171
};

var goodGuy = {
  imageInfo: 'images/char-boy.png',
  width: 101,
  height: 171,
  bound: {
    left: 0,
    right: 404,
    bottom: 405
  },
  move: {
    vert: 83,
    horiz: 101
  }
};
// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (300) + 150);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x > 707) {
      this.x = 1;
    }
};
Enemy.prototype.render = function(x, y, imageInfo) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Draw the objects on the screen, required method for game
GameObjects.prototype.render = function() {
    ctx.drawImage(Resources.get(this.imageInfo.imageInfo), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, imageInfo){
    GameObjects.call(this, x, y, imageInfo);
}
Player.prototype.constructor = Player;

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.update = function(dt){

};
Player.prototype.handleInput = function(input){
    switch(input) {
      case 'left' : this.x -= player.width;
      case 'up' : this.y -= player.height;
      case 'right' : this.x += player.width;
      case 'down' : this.y += player.height;
    }

};
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.imageInfo.imageInfo), this.x, this.y);
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Enemies
var allEnemies = [
  new Enemy(100, 65),
  new Enemy(300, 225),
  new Enemy(50, 310),
  new Enemy(25, 140)
];
// Player
var player = new Player(303, 405, goodGuy);
