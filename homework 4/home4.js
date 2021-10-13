function concatStrings(str, separator) {
  if (typeof str !== 'string') {
    return '';
  }
  let meaning = str;
  let next;
  return function callback() {
    next = arguments[0];
    if (typeof(next) === 'string') {
      if(separator && typeof(separator) === 'string') {
        meaning += separator + next 
      } else {
        meaning += next
      };
      return callback;
    };
    return meaning;
  };
};


class Calculator {
  constructor(x, y) {
    if (!x || !y || isNaN(x || y) || !isFinite(x) || !isFinite(y) || typeof (x) !== 'number' || typeof (y) !== 'number') {
      throw new Error('Error is happened!');
    }
    this.x = x;
    this.y = y;
    this.logSum = () => console.log(this.x + this.y);
    this.logMul = () => console.log(this.x * this.y);
    this.logSub = () => console.log(this.x - this.y);
    this.logDiv = () => {
      if(y === 0) {
        throw new Error('Error is happened!');
      } 
      console.log(this.x / this.y);
    };
    this.setX = (num) => {
      if(!num || isNaN(num) || !isFinite(num) || typeof(num) !== 'number') {
        throw new Error('Error is happened!');
      } else {
        this.x = num;
      }
    };
    this.setY = (num) => {
      if(!num || isNaN(num) || !isFinite(num) || typeof(num) !== 'number') {
        throw new Error('Error is happened!');
      } else {
        this.y = num;
      }
    };
  };
};




