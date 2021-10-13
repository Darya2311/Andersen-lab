class Node {
  constructor (elem, next = null) {
    this.elem = elem;
    this.next = next;
  }
};



class Stack {
  constructor(maxLength = 10) {
    this.head = null;
    this.tail = null;
    this.maxLength = maxLength;
    if(typeof(maxLength) !== 'number' || !isFinite(maxLength) || maxLength < 1) {
      throw new Error('maxLength is invalid!')
    }
  };

  push(elem) {
    const node = new Node (elem)
    if(this.maxLength < node.elem) {
      throw new Error('Stack is overflowing')
    }
    if(this.tail) {
      this.tail.next = node;
    };

    if(!this.head) {
      this.head = node;
    };

    this.tail = node;
  };

  pop() {
    if(!this.head) {
      throw new Error('Stack is empty!')
    };
    let node = this.head;
    while (node.next !== this.tail) {
      node = node.next;
    }
    node.next = null;
    this.tail = node;
  };

  peek() {
    if(this.tail === null) {
      return null;
    } else {
        let element = this.tail
        return element;
    }
  };

  isEmpty(){
    if(this.head){
      return false
    } else {
      return true
    }
  };

  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current);
      current = current.next;
    }

    return arr;
  };

  static fromIterable(iterable) {
    return new Stack();
  }
};





class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  append(elem) {
    const node = new Node(elem);

    if(this.tail) {
      this.tail.next - node
    };

    if(!this.head) {
      this.head = node
    };

    this.tail = node

  };

  prepend(elem) {
    const node = new Node(elem, this.head);

    this.head = node;
    if (!this.tail) {
      this.tail = node
    }
  };

  find(elem) {
    if (!this.head) {
      return
    };

    let current = this.head;
    while (current) {
      if(current.elem === elem) {
        return current;
      };

      if(current.elem !== elem) {
        return null
      }
      current = current.next
    };
  };

  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current);
      current = current.next;
    }

    return arr;
  };

};



module.exports = { Stack };