const accountCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result'),
      tempResult = document.querySelector('.temp-result'),
      numbersElement = document.querySelectorAll('.number'),
      operationElement = document.querySelectorAll('.operation'),
      equalElement = document.querySelector('.equal'),
      backElement = document.querySelector('.backspace'),
      reversElement = document.querySelector('.revers'),
      clearElement = document.querySelector('.clear');

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
  });
});


operationElement.forEach(operation => {
  operation.addEventListener('click', (e) => {
    if(!disNum2) result;
    haveDot = false;
    let operationName = e.target.innerText;
    if(e.target.innerText === '+/-') {
      disNum2 = disNum2 * -1;
      return resultCalc.innerText = disNum2;
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
  disNum1 += disNum2 + ' ' + name + ' ';
  accountCalc.innerText = disNum1;
  resultCalc.innerText = '';
  disNum2 = '';
  tempResult.innerText = result;
};

function mathOperation() {
  if (!disNum2) {
    disNum2 = 0;
  }
  if(lastOperation === 'X') {
    result = parseFloat(result) * parseFloat(disNum2);
  } else if( lastOperation === '+') {
    result = parseFloat(result) + parseFloat(disNum2);
  } else if( lastOperation === '-') {
    result = parseFloat(result) - parseFloat(disNum2);
  } else if( lastOperation === '/') {
    result = parseFloat(result) / parseFloat(disNum2);
  }
};

equalElement.addEventListener('click', (event) => {
  if (!disNum1 && !disNum2) return;
  haveDot = false;
  mathOperation();
  clearVar();
  resultCalc.innerText = result;
  tempResult.innerText = '';
  disNum2 = result;
  disNum1 = '';
  disNum2 = '';
});


clearElement.addEventListener('click', (event) => {
  accountCalc.innerText = '0,00';
  resultCalc.innerText = '0,00';
  tempResult.innerText = '0,00';
  disNum1 = '';
  disNum2 = '';
  result = '';
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
  } else  {
    disNum2 =  resultCalc.innerText;
  }
}