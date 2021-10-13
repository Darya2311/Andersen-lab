function concatString(str, separator) {
    if (typeof str !== 'string') {
        return '';
    }

    return (nextStr, nextSeparator) => {
        if (typeof nextStr !== 'string') {
            return str
        }

        const connectedStr = (typeof separator === 'string') ? str + separator + nextStr : str + nextStr;
        const nextConcatSeparator = (typeof nextSeparator === 'string') ? nextSeparator : separator;

        return concatString(connectedStr, nextConcatSeparator);
    }
}

console.log(concatString('lol', '123')('kek', '321')('cheburek')(null));




function concatStrings(str, separator) {
    let meaning = str;
    let next;
  
    return function callback() {
      next = arguments[0];
      if (typeof(next) === 'string' && typeof(separator) === 'string') {
        separator ? meaning += separator + next : meaning += next;
        return callback;
      }
      return meaning;
    }
  }
console.log(concatStrings('lol', '123')('kek', '321')('cheburek')());
