var game = require('../game');
var play = require('../play');
var assert = require('assert');

describe('board operations', () => {

  var myGame;

  beforeEach( () => {
    myGame = game.load();
  })

  it('claims a board space with the player symbol', () => {
    play.takeTurn(myGame,5);
    assert.equal(myGame.playerData[0].cellsTaken[0].num, 5);
    assert.equal(myGame.board[1][1], 'X');
  })

  it('claims a board space with the player symbol on turn 2', () => {
    myGame.turn = 2;
    play.takeTurn(myGame,5);
    assert.equal(myGame.playerData[1].cellsTaken[0].num, 5);
    assert.equal(myGame.board[1][1], 'Y');
  })

})

describe( 'victory conditions', () => {

  var player1, player2, myGame;

  beforeEach( () => {
    myGame = game.load();
    player1 = myGame.playerData[0];
    player2 = myGame.playerData[1];
  })

  it('confirms a player is victorious with a horizontal match in a 2 player game', () => {
    play.takeTurn(myGame, 4); //player 1
    play.takeTurn(myGame, 3); //player 2
    play.takeTurn(myGame, 2);
    play.takeTurn(myGame, 9);
    play.takeTurn(myGame, 6);
    play.takeTurn(myGame, 7);
    play.takeTurn(myGame, 5);

    let victoryCells = play.checkForPlayerVictory(player1);
    checkVictoryArray(victoryCells, [4,5,6]);
  })

  it('confirms a player is victorious with a vertical match', () => {
    play.takeTurn(myGame, 8); //player 1
    play.takeTurn(myGame, 3); //player 2
    play.takeTurn(myGame, 2);
    play.takeTurn(myGame, 9);
    play.takeTurn(myGame, 5);
    play.takeTurn(myGame, 7);
    play.takeTurn(myGame, 1);

    let victoryCells = play.checkForPlayerVictory(player1);
    checkVictoryArray(victoryCells, [2,5,8]);
  })

  it('confirms a player is victorious with a forward diagonal match', () => {
    play.takeTurn(myGame, 5); //player 1
    play.takeTurn(myGame, 2); //player 2
    play.takeTurn(myGame, 1);
    play.takeTurn(myGame, 5);
    play.takeTurn(myGame, 9);
    play.takeTurn(myGame, 6);
    play.takeTurn(myGame, 9);

    let victoryCells = play.checkForPlayerVictory(player1);
    checkVictoryArray(victoryCells, [1,5,9]);
  })

  it('confirms a player is victorious with a backward diagonal match', () => {
    play.takeTurn(myGame, 5); //player 1
    play.takeTurn(myGame, 2); //player 2
    play.takeTurn(myGame, 3);
    play.takeTurn(myGame, 1);
    play.takeTurn(myGame, 9);
    play.takeTurn(myGame, 4);
    play.takeTurn(myGame, 7);

    let victoryCells = play.checkForPlayerVictory(player1);
    checkVictoryArray(victoryCells, [3,5,7]);
  })

  it('players are not victorious when neither attains a victory set', () => {
    play.takeTurn(myGame, 1); //player 1
    play.takeTurn(myGame, 2); //player 2
    play.takeTurn(myGame, 3);
    play.takeTurn(myGame, 1);
    play.takeTurn(myGame, 7);
    play.takeTurn(myGame, 4);
    play.takeTurn(myGame, 9);

    let victoryCells1 = play.checkForPlayerVictory(player1);
    let victoryCells2 = play.checkForPlayerVictory(player2);

    assert.deepEqual(victoryCells1, []);
    assert.deepEqual(victoryCells2, []);
  })

  it('says a player is not victorious if they haven\'t taken any cells yet', () => {
    let victoryCells = play.checkForPlayerVictory(player1);
    assert.deepEqual(victoryCells, []);
  })
})

function checkVictoryArray(victoryArray, numsArray){
  for(let i = 0; i < victoryArray.length; i++){
    assert.equal(victoryArray[i].num, numsArray[i]);
  }
}
