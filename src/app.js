import "./styles.css";

import {calculateExpression} from './utils/rpn/index.js'
import{Mathemathic,eulerConstant}from './utils/math/index.js'
// let currentOperand = '';
// let previousOperand = '';
// let operation='';

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const percentButton = document.querySelector('[data-percent]');
const inverseButton = document.querySelector('[data-inverse]');
const squarePowerButton = document.querySelector('[data-squarePower]');
const cubePowerButton = document.querySelector('[data-cubePower]');
const eulerPowerButton = document.querySelector('[data-EulerPower]');
const tenPowerButton = document.querySelector('[data-tenPower]');
const logButton = document.querySelector('[data-log]');
const logTenButton = document.querySelector('[data-logTen]');
const basePowerButton = document.querySelector('[data-basePower]'); 


// getDisplayNumber(number){
//   const floatNumber = parseFloat(number)
//   if(isNaN(floatNumber)) return ''
//   return floatNumber.toLocaleString('en')
// }

// updateDisplay(){
//   this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
//   if(this.operation !== undefined){
//      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//   }else this.previousOperandTextElement.innerText=''
 
// }
// appendNumber(number){
//   if(number==='.' && this.currentOperand.includes('.')) return
//   this.currentOperand = this.currentOperand.toString() + number.toString()
// }
// appendNumber(number){
//   if(number==='.' && this.currentOperand.includes('.')) return
//   this.currentOperand = this.currentOperand.toString() + number.toString()
// }





function clear(){
   previousOperandTextElement.innerText = ''
   currentOperandTextElement.innerText = ''
}

function appendSymbol(symbol) {
      if(symbol==='.' && currentOperandTextElement.innerHTML.includes('.')) return
      // this.currentOperand = this.currentOperand.toString() + number.toString()
      currentOperandTextElement.innerText += symbol.toString()
   
}

 function deleteSymbol(){
   currentOperandTextElement.innerText = currentOperandTextElement.innerText.toString().slice(0,-1)
 }

 function percent(params) {
  if(!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText = calculateExpression(currentOperandTextElement.innerText)/100
 }
 function makeInverse(params) {
  if(!currentOperandTextElement.innerText) return
  console.log(currentOperandTextElement.innerText)
  currentOperandTextElement.innerText = calculateExpression(currentOperandTextElement.innerText)*-1
 }

 function logarithmOnTen() {
  if(!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText = Mathemathic.logarithm(parseFloat(currentOperandTextElement.innerText),10).toFixed(5)
 }

 function logarithm() {
  if(!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText = Mathemathic.logarithm(parseFloat(currentOperandTextElement.innerText)).toFixed(5)
 }

 function squarePow() {
  if(!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.pow(expression,2)
 }

 function cubePow() {
  if(!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.pow(expression,3)
 }

 function tenPow() {
  if(!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.constBasePow(10,expression)
 }

 function eulerPow() {
  if(!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.constBasePow(eulerConstant,expression)
 }

function makePower(){
  if(!currentOperandTextElement.innerText ) return
  currentOperandTextElement.innerText+='^'
}

// навешиваем обработчики событий на кнопки
numberButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      appendSymbol(button.innerText)
      console.dir(button)
   })
})


operationButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      appendSymbol(button.innerText)
      console.dir(button)
   })
})

inverseButton.addEventListener('click',event=>{
  makeInverse()
  console.dir(event.target)
})
allClearButton.addEventListener('click',button=>{
   clear()
})

deleteButton.addEventListener('click',button=>{
   deleteSymbol()
})

equalsButton.addEventListener('click',button=>{
let expression = currentOperandTextElement.innerText
console.log(expression)
   previousOperandTextElement.innerText = calculateExpression(expression);
   currentOperandTextElement.innerText=''
})

percentButton.addEventListener('click',button=>{
  percent()
})

logButton.addEventListener('click',button=>{
logarithm()
})

logTenButton.addEventListener('click',button=>{
logarithmOnTen()
})

squarePowerButton.addEventListener('click',button=>{
  squarePow()
})

cubePowerButton.addEventListener('click',button=>{
  cubePow()
})

eulerPowerButton.addEventListener('click',button=>{
  eulerPow()
})

tenPowerButton.addEventListener('click',button=>{
  tenPow()
})

basePowerButton.addEventListener('click',button=>{
  makePower()
})