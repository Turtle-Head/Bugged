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
var Enemy = function(x, y, speed, imageInfo) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = imageInfo;
    this.x = x;
    this.y = y;
    this.speed = speed;
    GameObjects.call(this, x, y, imageInfo);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};
Enemy.prototype.render = function(x, y, imageInfo) {

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
Player.prototype.handleInput = function(allowedKeys[e.keyCode]){
    switch(allowedKeys[e.keyCode]) {
      case 'left' : this.x -= player.width; break;
      case 'up' : this.y -= player.height; break;
      case 'right' : this.x += player.width; break;
      case 'down' : this.y += player.height; break;
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
  new Enemy(100, 63, 200, badGuys),
  new Enemy(300, 200, 300, badGuys)
];
// Player
var player = new Player(303, 405, goodGuy);
