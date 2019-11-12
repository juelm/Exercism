//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (constitution) => {

  if(constitution < 3){
    throw(new Error("Ability scores must be at least 3"));
  }
  if(constitution > 18){
    throw(new Error("Ability scores can be at most 18"));
  }

  return Math.floor((constitution - 10) / 2);
};

export class Character {

  static rollAbility() {
    let ability = [Math.floor(Math.random() * 6 ) + 1, Math.floor(Math.random() * 6 ) + 1, Math.floor(Math.random() * 6 ) + 1, Math.floor(Math.random() * 6 ) + 1];

    let min = Math.min(...ability);
    let minIndex = ability.indexOf(min);
    ability.splice(minIndex,1);

    let score = 0;
    for(let i = 0; i < ability.length; i++){
      score += ability[i];
    }
    
    return score;
  }

  constructor(){
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    let constitution = Character.rollAbility();
    this.constitution = constitution;
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(constitution);
  }

  strength() {
    return this.strength;
  }

  dexterity() {
    return this.dexterity;
  }

  constitution() {
    return this.constitution;
  }

  intelligence() {
    return this.intelligence;
  }

  wisdom() {
    return this.widom;
  }

  charisma() {
    return this.charisma;
  }

  hitpoints() {
    return this.hitpoints;
  }



}

