//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(numRows) {
    this._rows = [];

    if(numRows == 1) this._rows = [[1]];
    if(numRows == 2) this._rows = [[1], [1,1]];
    if(numRows > 2){
      this._rows = [[1], [1,1]];
      for(let i = 2; i < numRows; i++){
        let currentRow = [];
        for(let j = 0; j < i + 1; j++){
          if(j === 0 || j === i){
            currentRow.push(1);
          }
          else{
            currentRow.push(this._rows[i - 1][j - 1] + this._rows[i - 1][j]);
          }
        }
        this._rows.push(currentRow);
      }
    }
  }

  get lastRow() {
    return this._rows[this._rows.length - 1];
  }

  get rows() {
    return this._rows;
  }
}

// let Pascy = new Triangle(6);
// for(ar of Pascy._rows)
//   console.log(ar)
