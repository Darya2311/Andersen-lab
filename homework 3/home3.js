Array.prototype.myFilter =  function (callbackFunc, thisArg) {
  if(typeof callbackFunc !== 'function') {
    throw new Error('callback is not a function')
  };
  let filtered = [];
  for(let i = 0; i < this.length; i++) {
    if (callbackFunc(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};




function createDebounceFunction(callbackFunc, ms) {
  let timeOut;
  return function () {
    if(timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(callbackFunc, ms);
    return timeOut;
  }
};
