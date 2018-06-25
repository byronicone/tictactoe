var game = require('./game');
var play = require('./play');
var EventEmitter = require('events');
let prompt = new EventEmitter();
let currentStep, currentGame;

process.stdin.on('data', function(data){
  prompt.emit(currentStep, data.toString().replace(/\s/g,''));
});

prompt.on(':new', function(step, text){
  console.log(text);
  currentStep = step;
  process.stdout.write('> ');
});

prompt.on('turn', (num) => {
  let victoryCells = play.takeTurn(currentGame, num);
  if(victoryCells){
    console.log('You win!');
    takeATurn(game.load());
  }
  else{
    takeATurn(currentGame);
  }
});

function takeATurn(thisGame){
  currentGame = thisGame;
  play.printBoard(currentGame);
  prompt.emit(':new', 'turn', 'Choose a space to mark!');
}

takeATurn(game.load());

process.stdin.resume();



