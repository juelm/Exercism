//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (currentMoment) => {
  
  let currentMillis = Date.parse(currentMoment);
  let laterMillis = currentMillis + 1000000000000;
  return new Date(laterMillis);
};



