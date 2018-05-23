var game = {};

var DEFAULT_SIZE = 3;


game.load = function(boardSize){
  if(!(boardSize > 0)){
    boardSize = DEFAULT_SIZE;
  }

  let board = loadBoard(boardSize);
  fillBoard(board);

  let playerData = loadPlayers();

  let game = {
    'board': board,
    'size' : boardSize,
    'turn': 1,
    'playerData': playerData
  };

  return game;
}

loadPlayers = function(symbols){
  let players = [];

  if(!symbols){
    symbols = ['X','Y'];
  }

  for(let i = 0; i<symbols.length; i++){
    players.push({'num': i+1,
      'symbol': symbols[i],
      'cellsTaken': []});
  }

  return players;
}

loadBoard = function(boardSize){
  return new Array(boardSize);
}

fillBoard = function(board){
  let boardSize = board.length;
  for(let rowNumber=0;rowNumber<boardSize;rowNumber++){
    let boardRow = getBoardRow(boardSize, rowNumber);
    board[rowNumber] = boardRow;
  }
}

getBoardRow = function(boardSize, rowNumber){
  let row = [];
  for( let cellNumber = (rowNumber*boardSize)+1; cellNumber <= boardSize*(rowNumber+1); cellNumber++){
    row.push(cellNumber);
  }
  return row;
}


for(prop in game) {
   if(game.hasOwnProperty(prop)) {
     module.exports[prop] = game[prop];
   }
}
