var play = {};

play.printBoard =function(game){

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

play.takeTurn = function(game,num){
  let boardSize = game.size;
  let coordinates = getCoordinatesFromCellNumber(game.size,num);
  let player = getCurrentPlayer(game);
  game.board[coordinates[0]][coordinates[1]] = player.symbol;
  player.spacesTaken.push(num);
}

getCurrentPlayer = function(game){
  let numPlayers = game.playerData.length;
  let playerIndex = (game.turn-1) % numPlayers;
  return game.playerData[playerIndex];
}

getCoordinatesFromCellNumber = function(boardSize, cellNumber){
  let rowNumber = Math.ceil(cellNumber/boardSize)-1;
  let columnNumber = (cellNumber-1) % boardSize;
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

for(prop in play) {
   if(play.hasOwnProperty(prop)) {
     module.exports[prop] = play[prop];
   }
}
