//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  
  constructor(){
    this._roster = {};
  }
  
  roster() {

    let rosterKeys = Object.keys(this._roster);
    let orderedKeys = rosterKeys.sort();

    let outRoster = {};
    for(let k of orderedKeys){
      outRoster[k] = [...this._roster[k].sort()];
    }
    return outRoster;
  }

  add(name, grade) {
    if(grade in this._roster){
      this._roster[grade].push(name);
    }else{
      this._roster[grade] = [name];
    }
  }

  grade(level) {
    let rosterKeys = Object.keys(this._roster);
    let outGrade;
    if(rosterKeys.length)
      outGrade = [...this._roster[level]];
    else outGrade = [];
    
    return outGrade.sort();
  }
}
