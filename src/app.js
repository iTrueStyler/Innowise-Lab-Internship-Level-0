import './styles.css';

import { calculateExpression } from './utils/math/rotatePolishNotation/index.js';
import {
  previousOperandTextElement,
  currentOperandTextElement,
  numberButtons,
  operationButtons,
  equalsButton,
  deleteButton,
  allClearButton,
  percentButton,
  inverseButton,
  squarePowerButton,
  cubePowerButton,
  eulerPowerButton,
  tenPowerButton,
  logButton,
  logTenButton,
  basePowerButton,
  decimalInverseButton,
  rootPowButton,
  squareRootButton,
  cubeRootButton,
  memoryCleanButton,
  memoryPlusButton,
  memoryMinusButton,
  memoryReadButton,
  secondButton,
} from './utils/helpers/constants.js';
import {
  clear,
  toogleType,
  appendSymbol,
  deleteSymbol,
  decimalInverse,
  percent,
  makeInverse,
  logarithmOnTen,
  logarithmOnTwo,
  logarithm,
  squarePow,
  cubePow,
  tenPow,
  eulerPow,
  secondPow,
  makePower,
  addRootSymbol,
  makeRoot,
} from './utils/helpers/workerFunctions.js';
import { memoryClean, memoryMinus, memoryPlus, memoryRead } from './utils/math/memory/index.js';
// навешиваем обработчики событий на кнопки
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendSymbol(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendSymbol(button.innerText);
  });
});

inverseButton.addEventListener('click', () => {
  makeInverse();
});
allClearButton.addEventListener('click', () => {
  clear();
});

deleteButton.addEventListener('click', () => {
  deleteSymbol();
});

equalsButton.addEventListener('click', () => {
  let expression = currentOperandTextElement.innerText;
  previousOperandTextElement.innerText = calculateExpression(expression);
  currentOperandTextElement.innerText = '';
});

percentButton.addEventListener('click', () => {
  percent();
});

logTenButton.addEventListener('click', () => {
  logarithmOnTen();
});

squarePowerButton.addEventListener('click', () => {
  squarePow();
});

cubePowerButton.addEventListener('click', () => {
  cubePow();
});

tenPowerButton.addEventListener('click', () => {
  tenPow();
});

eulerPowerButton.addEventListener('click', () => {
  if (eulerPowerButton.textContent === 'eX') {
    eulerPow();
  } else {
    secondPow();
  }
});
let i;
logButton.addEventListener('click', () => {
  if (logButton.textContent === 'ln') {
    logarithm();
  } else {
    logarithmOnTwo();
  }
});

basePowerButton.addEventListener('click', () => {
  makePower();
});

decimalInverseButton.addEventListener('click', () => {
  decimalInverse();
});

rootPowButton.addEventListener('click', () => {
  addRootSymbol();
});

squareRootButton.addEventListener('click', () => {
  makeRoot(2);
});

cubeRootButton.addEventListener('click', () => {
  makeRoot(3);
});
memoryCleanButton.addEventListener('click', () => {
  memoryClean();
});
memoryPlusButton.addEventListener('click', () => {
  memoryPlus();
});
memoryMinusButton.addEventListener('click', () => {
  memoryMinus();
});
memoryReadButton.addEventListener('click', () => {
  memoryRead();
});

secondButton.addEventListener('click', () => {
  toogleType();
});
