//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(arr) {
    this._list = [];
    if(arr != null){
      if(Array.isArray(arr)){
        if(arr.length){
          if(typeof arr[0] === 'number') this._list = [...arr];
          else{
            for(let el of arr){
              this._list.push(...el);
            }
          }
        }
      }else{
        this._list.push(...arr);
      }
    }

    this.values = [...this._list]
    this.index = 0;
  }

  append(arr1) {
    let temp = [...this._list];
    if(arr1 == null);
    else{
      temp.push(...arr1);
    } 
    
    return new List(temp);

  }

  concat(arr) {

    let temp = [...this._list];
    if(arr === null);
    else temp.push(...arr);
    return new List(temp);
  }

  filter(boo) {
    let value = [];
    for(let i = 0; i < this._list.length; i++){
      if(boo(this._list[i])) value.push(this._list[i]);
    }
    let temp = new List(value);
    return temp;
  }

  map(fun) {
    let value = [];
    for(let i = 0; i < this._list.length; i++){
      value.push(fun(this._list[i]));
    }
    let temp = new List(value);
    return temp;
  }

  length() {
    return this._list.length;
  }


  foldl(fun, init) {

    let accum = init;

    for(let i = 0; i < this._list.length; i++){
      accum = fun(accum, this._list[i]);
    }

    return accum;
  }

  foldr(fun, init) {

    let acc = init;

    for(let i = this._list.length - 1; i >= 0; i--){
      acc = fun(acc, this._list[i]);
    }

    return acc;
  }

  reverse() {

    let inOrder = [...this._list]
    let end = inOrder.length - 1;
    let start = 0;

    while(end > start){
      let temp = inOrder[end];
      inOrder[end] = inOrder[start];
      inOrder[start] = temp;
      end--;
      start++;
    }

    this._list = [...inOrder];

    return new List([inOrder]);
    
  }

  [Symbol.iterator](){
    return{
      next: () =>  {if(this.index < this._list.length){
          return{value: this._list[this.index++], done: false};
        }else{
          this.index = 0;
          return{done: true};
        }
      }
    }
  }

}
