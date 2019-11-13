//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const colorCode = (color) => {
  let lookup = color.toLowerCase();

  let numWires = "";
  for (let i = 0; i < COLORS.length; i++){
    if(lookup === COLORS[i]){
      numWires = i;
    }
  }
  
  return numWires;
};

