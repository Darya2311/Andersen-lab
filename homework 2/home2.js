function makeObjectDeepCopy(obj) {
  const cloneObj = {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}


function selectFromInterval(arr, min, max) {
  let newArr;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      throw new Error("Error is happened!");
    }
  };
  if (!Array.isArray(arr) || isNaN(min || max) || min % 1 !=0 || max % 1 != 0 || !isFinite(min) || !isFinite(max)) {
      throw new Error("Error is happened!");
  } else {
      if (max < min) {
        newArr = arr.filter(v => v <= min && v >= max);
        console.log(newArr);
      } else {
        newArr = arr.filter(v => v >= min && v <= max);
        console.log(newArr);
      }
  };
}


const myIterable = { 
  from: 1, 
  to: 4,
  [Symbol.iterator] () {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.to < this.from || !this.to || !this.from || isNaN(this.to || this.from ) 
        || this.from % 1 != 0 || this.to % 1 != 0 || !isFinite(this.to) || !isFinite(this.from)) {
          throw new Error("Error is happened!");

    } else {
      if (this.current <= this.to) {
        return { done: false, value: this.current++};
      } else {
        return { done: true };
      }
    }
  }
};
for (let item of myIterable) {
    console.log(item); 
}
