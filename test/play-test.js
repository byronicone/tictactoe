var game = require('../game');
var play = require('../play');
var assert = require('assert');

describe('play controller', () => {

  var myGame;

  beforeEach( () => {
    myGame = game.load();
  })

  it('claims a board space with the player symbol', () => {
    play.takeTurn(myGame,5);
    assert.equal(myGame.playerData[0].spacesTaken[0], 5);
    assert.equal(myGame.board[1][1], 'X');
  })

  it('claims a board space with the player symbol on turn 2', () => {
    myGame.turn = 2;
    play.takeTurn(myGame,5);
    assert.equal(myGame.playerData[1].spacesTaken[0], 5);
    assert.equal(myGame.board[1][1], 'Y');
  })
})
