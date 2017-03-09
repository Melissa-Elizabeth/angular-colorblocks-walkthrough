colorBlocks.controller('GameController', ['DataFactory', function(DataFactory) {

console.log('game controller running');

var self = this;

// self.colors helps us get from the controller to the DOM/View
// DataFactory.colorArray helps us get something from the DataFactory to the controller
self.colors = DataFactory.colorArray;
// self.colors = ['red', 'blue', 'magenta', 'green', 'pink'];

// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?';
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
  }
};

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
