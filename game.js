var game = {};

var HORIZONTAL = 1;
var VERTICAL =  2;
var FORWARD_DIAG = 3;
var BACKWARD_DIAG = 2;

var DEFAULT_SIZE = 3;


game.load = function(boardSize){
  if(!(boardSize > 0)){
    boardSize = DEFAULT_SIZE;
  }

  let board = loadBoard(boardSize);
  fillBoard(board);

  let playerSymbols = loadPlayerSymbols();

  let game = {
    'board': board,
    'size' : boardSize,
    'playerSymbols': playerSymbols,
  };

  return game;
}

loadPlayerSymbols = function(symbol1, symbol2){
  let symbols = { 'player1': symbol1 || 'X', 'player2': symbol2 || 'Y'};
  return symbols;
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

printBoard =function(game){

  let boardSize = getBoardSize(game);
  let rowDivider = '_______';

  for(let rowNumber=0; rowNumber<boardSize; rowNumber++){

    let rowPrintout = `${rowDivider}+\n`;

    for(let colNumber=0; colNumber<boardSize; colNumber++){
      rowPrintout += `| ${game.board[x][y]} `;
    }

    rowPrintout += `|\n${rowDivider}\n`;

    console.log(row);

  }

}

playTurn = function(game,num,playerSymbol){
  let boardSize = getBoardSize(game);
  let coordinates = getCoordinatesFromCellNumber(num);

  game.board[coordinates[0]][coordinates[1]] = playerSymbol;

  eval(`game.${playerSymbol}.add(num)`);

  return game;
}

getCoordinatesFromCellNumber = function(board, number){
  let rowNumber = Math.ceil(num/boardSize)-1;
  let columnNumber = (num-1) % boardSize;
  return [rowNumber, columnNumber];
}

checkForVictory = function(game){
  //Horizontal victory = diff of 1.
  //Vertical victory = diff of board size
  //First diagonal victory =  diff of board size + 1;
  //second diagonal victory = diff of board size - 1;
  //check player 1's set.
    //if victorious, return.
  //check player 2's set.
    //if victorious, return.
}

checkPlayerSetForVictory = function(playerSet){
  //isVictory = false, by default
  //For each number
    //get the diff array with each other potential victory chain number
    //if the diff array contains size-1 items for any diff amount
      //get the potential victory type (horizontal, vertical, forward diagonal, reverse diagonal)
      //validate the rows and columns for the specified victory type
      //if valid, isVictory = true
  //return isVictory
}

// getDiffsInPlayerSet = function(
//

for(prop in game) {
   if(game.hasOwnProperty(prop)) {
     module.exports[prop] = game[prop];
   }
}
