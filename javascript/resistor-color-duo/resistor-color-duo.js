//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const COLORS = {"black" : 0, "brown" : 1, "red" : 2, "orange" : 3, "yellow" : 4, "green" : 5, "blue" : 6, "violet" : 7, "grey" : 8, "white" : 9};

export const value = (inArr) => {

  let numWires = 0;
  for(let i = 0; i < inArr.length; i++){
    if(i == 0){
      numWires += COLORS[inArr[i].toLowerCase()] * 10;
    }
    if(i == 1){
      numWires += COLORS[inArr[i].toLowerCase()];
    }
  }

  return numWires;

};
