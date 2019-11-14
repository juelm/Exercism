//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {

  constructor(){
    this._head = null;
    this._tail = null ;
    this._count = 0;
  }
  push(val) {
    if(this._count === 0){
      let current = new Node(val, null, null);
      this._head = current;
      this._tail = current;
    }else{
      let current = new Node(val, this._tail, null);
      this._tail._next = current;
      this._tail = current;
    }
    this._count++
  }

  pop() {
    let returnValue;
    if(this._count === 0 ){
      throw "Index out of Range Exception";
    }else if(this._count === 1){
      returnValue = this._tail._value;
      this._tail = null;
      this._head = null;
    }else{
      returnValue = this._tail._value;
      this._tail = this._tail._last;
      this._tail._next = null;
    }
    this._count--
    return returnValue;
  }

  unshift(val) {
    if(this._count === 0){
      let current = new Node(val, null, null);
      this._head = current;
      this._tail = current;
    }else{
      let current = new Node(val, null, this._head);
      this._head._last = current;
      this._head = current;

    }
    this._count++
  }

  shift() {
    let returnValue;
    if(this._count === 0 ){
      throw "Index out of Range Exception";
    }else if(this._count ===1){
      returnValue = this._head._value;
      this._tail = null;
      this._head = null;
    }else{
      returnValue = this._head._value;
      this._head = this._head._next;
      this._head._last = null;
    }
    this._count--
    return returnValue;
  }

  delete(val) {

    if(this._count === 0) throw "Cannot delete from empty list";
    else if(this._count === 1){
      if(this._head._value === val){
        this._head = null;
        this._tail = null;
        this._count--;
      }
    }else{

      let current = this._head;
      let prev = current;

      while(current){
        if(current._value === val) break;
        prev = current;
        current = current._next;
      }


      if(current === null){
      }else if(current === this._head){
        this._head = this._head._next;
        this._head._last = null;
        this._count--;
      }else if(current === this._tail){
        this._tail = this._tail._last;
        this._tail._next = null;
        this._count--;
      }else{
        let nextNode = current._next;
        prev._next = prev._next._next;
        nextNode._last = nextNode._last._last;
        this._count--;
      }
      
    }

  }

  count() {
    return this._count;
  }

}

export class Node{
    constructor(val, prev, _next){
      this._value = val;
      this._last = prev;
      this._next = _next;

    }
}
