/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let trimmed = message.trim();
  let lastQuestionMark = trimmed.lastIndexOf('?');
  let endsInQuestion = lastQuestionMark == trimmed.length - 1;
  let upperCaseMessage = trimmed.toUpperCase();
  let allCaps = trimmed === upperCaseMessage;
  let retort = 'Whatever.';
  let numRegex = /[0-9, ]/g;
  let numbers = trimmed.match(numRegex);

  if(numbers != null && numbers.length === trimmed.length) allCaps = false;

  if(allCaps){
    retort = 'Whoa, chill out!';
  }
  if(endsInQuestion){
    retort = 'Sure.';
  }
  if(allCaps && endsInQuestion){

    retort = "Calm down, I know what I'm doing!";

    if(trimmed.length > 1){
      let penultimate = trimmed[trimmed.length - 2];
      let regex = /[A-Z]/g;
      let nonLetter = penultimate.match(regex);
      if(nonLetter === null) retort = "Sure."
    }

  }
  if(!trimmed){
    retort = 'Fine. Be that way!';
  }

  return retort;

};
