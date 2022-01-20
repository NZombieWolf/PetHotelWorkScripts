/*
myFunction()

function myFunction() {

  var datasize = getSheetNumber(); //this should count the number of entries for comparison
  var maxNum = 0; // this variable keeps track of the largest number
  var comparison = 1; // this variable is used to hold the next value to be tested against.
  var current = 0;

  findLargest(datasize, maxNum, comparison, current);
}

function findLargest(datasize, maxNum, comparison, current){
  var startingX = 2;
  var currentX = startingX;
  var endingX = 8;
  var startingRow = 4;
  var currentRow = startingRow;
  var cell
  var stopRow = 17;
  var currentCell = currentX + currentRow;
  var findingLargest = true;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1];
  var range = sheet.getRange('B4:H16');
  range.activate();


  while(findingLargest = true){
 //   currentCell = currentX + currentRow;
 //   cell = sheet[1].getRange(currentRow,currentX);
 //   sheet[1].setCurrentCell(cell);
 //   maxNum = cell;

    maxNum = range.getValue();
    
    for(var t = 1; t < datasize; t++){
      ss.getSheets()[t+1].getRange('B2:H16').activate;
      comparison = range.getValue();

      if(comparison >= maxNum){
        maxNum = comparison;
      }
    }
    


    // the following switch case will chang the current cell
    switch (currentX){
      case 2:
        currentX = 3
        break;
      case 3:
        currentX = 4
        break;
      case 4:
        currentX = 5
        break;
      case 5:
        currentX = 6
        break;
      case 6:
        currentX = 7
        break;
      case 7:
        currentX = 8
        break;
      case 8:
        currentX = 2
        currentRow++;
        if(currentRow >=17){
          findingLargest = false;
        }
        break;
    }

  }
}

function getNext(){
  return 1;
}


function getSheetNumber(){
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  return sheets.length - 1;
}
*/