//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let alphabet = new Set();
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  let lowerSentence = sentence.toLowerCase();
  for(let letter of lowerSentence){
    for(let character of letters){
      if(letter === character){
        alphabet.add(letter);
        break;
      }
    }
  }
  if(alphabet.size === 26)return true; 
  else return false;
  
};
