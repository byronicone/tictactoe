var exports = module.exports = {};

var HORIZONTAL = 1;
var VERTICAL =  2;
var FORWARD_DIAG = 3;
var BACKWARD_DIAG = 2;



loadGame = function(boardSize, player2Symbol, player1Symbol){


  for(let row=0;row<boardSize;row++){
    addRowToBoard(game, row);
  }



  return game;
}

loadPlayerSymbols = function(game, playerSymbols){
  for(let symbol of playerSymbols){
     eval(`game.player${i} = playerSymbols[i]`);
  }
}

loadBoard = function(game, boardSize){
  boardSize = boardSize || 3;
  game.board = new Array(boardSize);
  return game;
}

addRowToBoard = function(game, row){
  let size = getBoardSize(game);
  for( let cellNumber = (row*3)+1; cellNumber < size*(row+1)){
    game.board[row].push(cellNumber);
  }
}

getBoardSize = function(game){
  return game.board.length;
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

  eval(`game.${playerSymbol}.add(num)`;

  return game;
}

getCoordinatesFromCellNumber = function(board, number){
  let rowNumber = Math.ceil(num/boardSize)-1;
  let columnNumber = (num-1) % boardSize;
  return [rowNumber, columnNumber];
}

checkForVictory = function(game){
  //Horizontal victory = diff of 1.
  //Vertical victory = diff of getBoardSize(game);
  //First diagonal victory =  diff of board size + 1.  all columns, rows different
  //second diagonal victory = diff of board size - 1.  all columns, rows different
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

getDiffsInPlayerSet = function(

