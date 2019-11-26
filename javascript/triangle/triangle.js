//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.s1 = side1;
    this.s2 = side2;
    this.s3 = side3;
  }

  kind() {
    if(this. s1 <= 0 || this.s2 <= 0 || this.s3 <= 0) throw "All sides must be greater than 0";
    else if((this.s1 + this.s2) < this.s3) throw "Invalid lengths";
    else if((this.s1 + this.s3) < this.s2) throw "Invalid lengths";
    else if((this.s2 + this.s3) < this.s1) throw "Invalid lengths";

    if(this.s1 === this.s2 && this.s1 === this.s3) return "equilateral";
    else if(this.s1 === this.s2 || this.s1 === this.s3 || this.s2 === this.s3) return "isosceles"
    else return "scalene"
  }
}
