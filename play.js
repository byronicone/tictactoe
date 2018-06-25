var play = {};

//Victory set diffs for default size.
//Example:  1, 2, 3 all have a diff of 1
//1, 5, 9 all have a diff of 4.

var HORIZONTAL = 1;
var VERTICAL =  3;
var FORWARD_DIAG = 4;
var BACKWARD_DIAG = 2;

var victoryDiffs = new Set([HORIZONTAL, BACKWARD_DIAG, VERTICAL, FORWARD_DIAG]);

var DIFFS_REQUIRED = 2;

play.printBoard =function(game){

  let boardSize = game.size;

  for(let rowNumber=0; rowNumber<boardSize; rowNumber++){
    let rowPrintout = '';
    for(let colNumber=0; colNumber<boardSize; colNumber++){
      rowPrintout += `| ${game.board[rowNumber][colNumber]} `;
    }

    rowPrintout += `|\n`;

    console.log(rowPrintout);

  }

}

play.takeTurn = function(game,num){
  let boardSize = game.size;
  let coordinates = getCoordinatesFromCellNumber(game.size,num);
  let player = getCurrentPlayer(game);

  let rowNumber = coordinates[0];
  let colNumber = coordinates[1];

  game.board[rowNumber][colNumber] = player.symbol;
  player.cellsTaken.push({'num':num, 'rowNumber':rowNumber, 'colNumber': colNumber});
  let victoryCells = play.checkForPlayerVictory(player);
  game.turn++;
  if(victoryCells.length>0){
    return victoryCells;
  }
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

setVictoryDiffs = function(boardSize){
  VERTICAL =  boardSize;
  FORWARD_DIAG = boardSize+1;
  BACKWARD_DIAG = boardSize-1;
  DIFFS_REQUIRED = boardSize-1;
}

play.checkForPlayerVictory = function(player){
  sortPlayerCells(player);
  victorySet = checkPlayerSetForVictory(player.cellsTaken);
  return victorySet;
}

sortPlayerCells = function(player){
  player.cellsTaken = player.cellsTaken.sort( (a,b) => {return a.num-b.num});
}

checkPlayerSetForVictory = function(cellsTaken){

  for(let i = 0; i < cellsTaken.length-2; i++){
     cellsTaken = cellsTaken.splice(i);
     let potentialWinners = getPotentialWinners(cellsTaken);
     if(potentialWinners.length > 0){
       return potentialWinners;
     }

  }
  return [];

}

getPotentialWinners = function(cellsTaken){

    let potentialWinners = [];

    potentialWinners.push(cellsTaken[0]);

    let currentDiff = 0;

    for(let j = 1; j < cellsTaken.length; j++){

      let nextCell = cellsTaken[j];
      let thisCell = cellsTaken[j-1];

      let thisDiff = nextCell.num - thisCell.num;
      if(currentDiff == 0){ currentDiff = thisDiff }

      if(victoryDiffs.has(thisDiff) && thisDiff >= currentDiff){
        if(thisDiff > currentDiff){
          potentialWinners.pop();
        }

        potentialWinners.push(nextCell);

        currentDiff = thisDiff;
      }

      if(DIFFS_REQUIRED==potentialWinners.length - 1){
        if(validateWinners(currentDiff,potentialWinners)){
          return potentialWinners;
        }
      }
    }

    return [];
}

validateWinners = function(victoryType, potentialWinners){
  switch (victoryType){
    case HORIZONTAL:
      return areInSameRow(potentialWinners);
    case BACKWARD_DIAG:
      return areInBackwardDiag(potentialWinners);
    case VERTICAL:
      return areInSameColumn(potentialWinners);
    case FORWARD_DIAG:
      return areInForwardDiag(potentialWinners);
    default:
      return false;
  }
}

areInSameRow = function(cells){
  for(let i = 1; i<cells.length; i++){
    if(cells[i-1].rowNumber != cells[i].rowNumber){
      return false;
    }
  }
  return true;
}

areInSameColumn = function(cells){
  for(let i = 1; i<cells.length; i++){
    if(cells[i-1].colNumber != cells[i].colNumber){
      return false;
    }
  }
  return true;
}

areInBackwardDiag = function(cells){
  for(let i = 1; i<cells.length; i++){
    if(cells[i-1].colNumber != cells[i].colNumber+1){
      return false;
    }
  }
  return true;
}

areInForwardDiag = function(cells){
  for(let i = 1; i<cells.length; i++){
    if(cells[i-1].colNumber != cells[i].colNumber-1){
      return false;
    }
  }
  return true;
}

for(prop in play) {
   if(play.hasOwnProperty(prop)) {
     module.exports[prop] = play[prop];
   }
}
