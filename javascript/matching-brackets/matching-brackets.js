//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const matchingBrackets = (string) => {

  let corresponding = { "(" : ")", "[" : "]", "{": "}"}
  let symbols = [];
  let unclosed = [];

  let matchedUp = true;

  for(let i = 0; i < string.length; i++){
    if(string[i] === '(' || string[i] === ')' || string[i] === '[' || string[i] === ']' || string[i] === '{' || string[i] === '}') symbols.push(string[i]);
    
  }

  if(symbols.length % 2 != 0) return false;

  for(let sym of symbols){
    if(sym === "(" || sym === "[" || sym === "{") unclosed.push(sym);
    else{
      if(symbols.length === 0) return false;
      let opening = unclosed.pop();
      if(corresponding[opening] != sym) return false;
    }

  }

  if(unclosed.length > 0) return false;

  return matchedUp;
  
};


