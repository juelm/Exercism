//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(stringMatrix) {
    let rowArray = [];
    let columnArray = [];

    for(let i = 0; i < stringMatrix.length; i++){
      let currentRow = [];
      if(stringMatrix[i] === "\n"){
        rowArray.push(currentRow);
        columnArray.push(currentRow);
        currentRow = [];
      }
      else{
        currentRow.push(stringMatrix[i]);
      }
    }

    for(let j = 0; j < rowArray.length; j++){
      for(let k = 0; k < rowArray[i].length; k++){
        columnArray[k][j] = rowArray[j][k];
      }
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

let matty = new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6');
console.log(matty.rows());