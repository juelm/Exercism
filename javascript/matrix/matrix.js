//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {

  constructor(stringMatrix) {
    let rowArray = [];
    let columnArray = [];

    let rowStrings = stringMatrix.split('\n');
    for(let i = 0; i < rowStrings.length; i++){
      let currentRow = [];
      let numberStrings = rowStrings[i].split(' ');
      for(let j = 0; j < numberStrings.length; j++){
        currentRow.push(numberStrings[j] * 1);
      }
      rowArray.push(currentRow);
    }

    for(let i = 0; i < rowArray[0].length; i++){
      let currentColumn = [];
      for(let j = 0; j < rowArray.length; j++){
        currentColumn.push(rowArray[j][i]);
      }
      columnArray.push(currentColumn);
    }

    this.rows = rowArray;
    this.columns = columnArray;

  }

  rows() {
    return rows;
  }

  columns() {
    return columns;
  }
}

