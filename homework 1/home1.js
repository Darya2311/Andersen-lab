function isValid () {
  let firstNum = prompt('Enter first number', '');
  let secondNum = prompt('Enter second number', '');

  if(!isNaN(firstNum) && !isNaN(secondNum)) {
    if(secondNum % 1 === 0 && isFinite(secondNum)) {
      let parsed = parseInt(firstNum, secondNum);
      if (isNaN(parsed)) { 
        console.log(0); 
      } else {
        console.log(parsed);
      };
    } else {
      console.log(0); 
    }
  } else {
    console.log('Некорректный ввод!');
  };
};



function calculate () {
  let firstNum = prompt('Enter first number', '');
  let secondNum;

  if (!isNaN(firstNum))  {
    secondNum = prompt('Enter second number', '');
  };

  if(!isNaN(firstNum) && !isNaN(secondNum)) {
    function calc () {
      let sumResult = +firstNum + +secondNum;
      let subResult = +firstNum - +secondNum;
      console.log('Ответ:', sumResult, subResult);
    };
    calc();
  } else {
      console.log('Некорректный ввод!')
  }
};


