//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {
  let dToRMap = {'G' : 'C', 'C' : 'G', 'T' : 'A', 'A' : 'U'};
  let RNA = '';
  for(let ch of DNA){
    RNA = RNA + dToRMap[ch];
  }

  return RNA;
};


