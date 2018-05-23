var assert = require('assert');
var game = require('../game');

describe('tic tac toe game', () => {
  it('loads a game with defaults', () => {
    let myGame = game.load();
    checkGameProperties(myGame, 3);
  })
  it('enforces default size for invalid input', () => {
    let myGame = game.load(-1);
    checkGameProperties(myGame, 3);
  })
   it('loads a large game with size of 5', () => {
    let myGame = game.load(5);
    checkGameProperties(myGame, 5);
   })
})

checkGameProperties = (myGame, size) => {
    assert.equal(myGame.size, size);
    assert.deepEqual(myGame.playerData,
      [{'num': 1, 'symbol': 'X', 'cellsTaken': []},
      {'num': 2, 'symbol': 'Y', 'cellsTaken': []}]);
    checkBoardLabels(myGame);
}

checkBoardLabels = (myGame) => {
    let count = 1;
    for(let x = 0; x < myGame.size; x++){
      for(let y = 0; y < myGame.size; y++){
        assert.equal(myGame.board[x][y],count);
        count++;
      }
    }
}
