import { Mathemathic, eulerConstant } from '../math/methods';
import { calculateExpression } from '../math/rotatePolishNotation/index.js';
import {
  previousOperandTextElement,
  currentOperandTextElement,
  eulerPowerButton,
  logButton,
} from './constants.js';

let type = false;

export function clear() {
  previousOperandTextElement.innerText = '';
  currentOperandTextElement.innerText = '';
}

export function toogleType() {
  if (!type) {
    type = true;
    eulerPowerButton.innerText = '2x';
    eulerPowerButton.classList.add('active');
    logButton.classList.add('active');
    logButton.innerText = 'log2';
  } else {
    type = false;
    eulerPowerButton.classList.remove('active');
    logButton.classList.remove('active');
    eulerPowerButton.innerText = 'eX';

    logButton.innerText = 'ln';
  }
}

export function appendSymbol(symbol) {
  if (symbol === '.' && currentOperandTextElement.innerHTML.includes('.')) return;

  currentOperandTextElement.innerText += symbol.toString();
}

export function deleteSymbol() {
  currentOperandTextElement.innerText = currentOperandTextElement.innerText.toString().slice(0, -1);
}

export function decimalInverse() {
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText = (
    1 / calculateExpression(currentOperandTextElement.innerText)
  ).toFixed(5);
}

export function percent() {
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText =
    calculateExpression(currentOperandTextElement.innerText) / 100;
}
export function makeInverse() {
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText =
    calculateExpression(currentOperandTextElement.innerText) * -1;
}

export function logarithmOnTen() {
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText = Mathemathic.logarithm(
    parseFloat(currentOperandTextElement.innerText),
    10,
  ).toFixed(5);
}

export function logarithmOnTwo() {
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText = Mathemathic.logarithm(
    parseFloat(currentOperandTextElement.innerText),
    2,
  ).toFixed(5);
}

export function logarithm() {
  console.log('qq');
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText = Mathemathic.logarithm(
    parseFloat(currentOperandTextElement.innerText),
  ).toFixed(5);
}

export function squarePow() {
  if (!currentOperandTextElement.innerText) return;
  let expression = currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = Mathemathic.pow(expression, 2);
}

export function cubePow() {
  if (!currentOperandTextElement.innerText) return;
  let expression = currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = Mathemathic.pow(expression, 3);
}

export function tenPow() {
  if (!currentOperandTextElement.innerText) return;
  let expression = currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = Mathemathic.constBasePow(expression, 10);
}

export function eulerPow() {
  if (!currentOperandTextElement.innerText) return;
  let expression = currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = Mathemathic.constBasePow(expression, eulerConstant);
}

export function secondPow() {
  if (!currentOperandTextElement.innerText) return;
  let expression = currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = Mathemathic.constBasePow(expression, 2);
}

export function makePower() {
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText += '^';
}
export function addRootSymbol() {
  if (!currentOperandTextElement.innerText) return;
  currentOperandTextElement.innerText += '√';
}
export function makeRoot(base) {
  if (!currentOperandTextElement.innerText) return;
  let number = currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = Mathemathic.rootPow(base, number);
}
