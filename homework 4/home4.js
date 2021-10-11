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
    this.logSum = function() {
      console.log(x + y);
    };
    this.logMul = function() {
      console.log(x * y);
    };
    this.logSub = function() {
      console.log(x - y);
    };
    this.logDiv = function() {
      if(y === 0) {
        throw new Error('Error is happened!');
      } 
      console.log(x / y);
    };
    this.setX = function (num) {
      if(!num || isNaN(num) || !isFinite(num) || typeof(num) !== 'number') {
        throw new Error('Error is happened!');
      } else {
        x = num;
      }
    };
    this.setY = function (num) {
      if(!num || isNaN(num) || !isFinite(num) || typeof(num) !== 'number') {
        throw new Error('Error is happened!');
      } else {
        y = num;
      }
    };
  };
};




