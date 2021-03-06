const accountCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result'),
      tempResult = document.querySelector('.temp-result'),
      numbersElement = document.querySelectorAll('.number'),
      equalElement = document.querySelector('.equal'),
      backElement = document.querySelector('.backspace'),
      reversElement = document.querySelector('.revers'),
      clearElement = document.querySelector('.clear'),
      operationElement = document.querySelectorAll('.operation');

let disNum1 = '';
let disNum2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;



numbersElement.forEach(number => {
  number.addEventListener('click', (e) => {
    if(e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if(e.target.innerText === '.' && haveDot) {
      return;
    };
    disNum2 += e.target.innerText;
    resultCalc.innerText = disNum2;
    checking();
  });
});


operationElement.forEach(operation => {
  operation.addEventListener('click', (e) => {
    if(!disNum2) result;
    haveDot = false;
    let operationName = e.target.innerText;
    if(e.target.innerText === '+/-') {
      disNum2 = disNum2 * -1;
      return resultCalc.innerText = (disNum2);
    }
    if(disNum1 && disNum2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(disNum2);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});


function clearVar(name = '') {
  disNum1 += disNum2 + ' ' + name + ' ' ;
  accountCalc.innerText = disNum1;
  resultCalc.innerText = '';
  disNum2 = '';
  tempResult.innerText = result;
};

function mathOperation() {
  if (!disNum2) {
    disNum2 = 0;
  };
  if(lastOperation === 'X') {
    result = parseFloat(result) * parseFloat(disNum2);

    console.log(result)
    if(!Number.isInteger(result)) {
      result = parseFloat(result).toFixed(8);
    };
  } else if( lastOperation === '+') {
    result = parseFloat(result) + parseFloat(disNum2);
    if(!Number.isInteger(result)) {
      result = parseFloat(result).toFixed(8);
    };
  } else if( lastOperation === '-') {
    result = parseFloat(result) - parseFloat(disNum2);
    if(!Number.isInteger(result)) {
      result = parseFloat(result).toFixed(8);
    };
  } else if( lastOperation === '/') {
    result = parseFloat(result) / parseFloat(disNum2);
    if(!Number.isInteger(result)) {
      result = parseFloat(result).toFixed(8);
    };
  } 
};

equalElement.addEventListener('click', () => {
  if (!disNum1 && !disNum2) return;
  haveDot = false;
  mathOperation();
  clearVar();
  resultCalc.innerText = result;
  tempResult.innerText = '';
  disNum2 = result;
  disNum1 = '';
  if(disNum2 === null) {
    disNum2 = 0;
  }
});


clearElement.addEventListener('click', () => {
  accountCalc.innerText = '0';
  resultCalc.innerText = '0';
  tempResult.innerText = '0';
  disNum1 = '';
  disNum2 = '';
  result = '';
  addAtribute();
});

backElement.addEventListener('click', backSpaceFunc);

window.addEventListener('keydown', (e) => {
  if(
    e.key === '0' || 
    e.key === '1' || 
    e.key === '2' || 
    e.key === '3' || 
    e.key === '4' || 
    e.key === '5' || 
    e.key === '6' || 
    e.key === '7' || 
    e.key === '8' || 
    e.key === '9' || 
    e.key === '.'
  ) {
    clickButtonElement(e.key);
  } else if (
    e.key === '+' ||
    e.key === '/' ||
    e.key === '-' 
  ) {
    clickOperationElement(e.key);
  } else if (e.key === '*') {
    clickOperationElement('X')
  } else if (e.key == 'Enter' || e.key === '=') {
    clickEqual();
  } else if (e.key == 'Backspace') {
    backSpaceFunc();
  }
});

function clickButtonElement(key) {
  numbersElement.forEach(button => {
    if(button.innerText === key) {
      button.click();
    }
  });
};


function checking() {
  if(resultCalc.innerText != '') {
    let btns = document.getElementsByClassName('operation');
    let btnsArray = Array.from(btns);
    btnsArray.forEach(button => {
      button.removeAttribute('disabled');
    }); 
  };
};


function addAtribute() {
  if(resultCalc.innerText === '0' || disNum2 === '') {
    let btns = document.getElementsByClassName('operation');
    let btnsArray = Array.from(btns);
    btnsArray.forEach(button => {
      button.setAttribute('disabled', true);
    }); 
  };
};

function clickOperationElement(key) {
  operationElement.forEach(button => {
    if(button.innerText === key) {
      button.click();
    }
  });
};

function clickEqual() {
  equalElement.click();
};

function backSpaceFunc () {
  let str = resultCalc.innerText;
  resultCalc.innerText = str.substring(0, str.length -1);
  if (resultCalc.innerText === '') {
    resultCalc.innerText = 0;
    disNum2 = '';
    addAtribute();
  } else  {
    disNum2 = resultCalc.innerText;
  };
};
