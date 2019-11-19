// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

let existingNames = [];
let letterChoices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];

export class Robot { 

    static getRandomLetter(){
        let randomIndex = Math.floor(Math.random() * 26);
        return letterChoices[randomIndex];
    } 

    static getRandomNumber(){
        return Math.floor(Math.random() * 9);
    }


    static createName(){ 
        let name = Robot.getRandomLetter();
        name += Robot.getRandomLetter();
        name += Robot.getRandomNumber();
        name += Robot.getRandomNumber();
        name += Robot.getRandomNumber();

        return name;
    }

    constructor(){

        let found = true;
        
        

        while(found){
            found = false;
            this._name = Robot.createName();
            for(let nm of existingNames){
                if(nm === this._name) found = true;
            }
        }

        existingNames.push(this._name);
        
    }

    get name(){return this._name};

    reset(){
        let priorName = this._name;

        let found = true;

        while(found){
            found = false;
            this._name = Robot.createName();
            for(let nm of existingNames){
                if(nm === this._name) found = true;
            }
        }

        existingNames.push(this._name);
        Robot.releaseNames(priorName);

    }


}

Robot.releaseNames = (name) => { 

 };



