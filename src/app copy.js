import "./styles.css";
// создаем класс с методами для базового функционала и инициализационными значениями
class Calculator {
   constructor(previousOperandTextElement,currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement,
      this.currentOperandTextElement = currentOperandTextElement,
      this.clear()
   }
   
   
   clear(){
      this.currentOperand =''
      this.previousOperand =''
      this.operation = undefined
      
   }

   delete(){
      this.currentOperand = this.currentOperand.toString().slice(0,-1)
   }

   appendNumber(number){
      if(number==='.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
   }

   chooseOperation(operation){
      if(this.currentOperand === '')return

      if(this.previousOperand !== ''){
         this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand 
      this.currentOperand = ''
   }

   compute(){
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if(isNaN(prev)||isNaN(current)) return 
      switch (this.operation){
      case '+': 
         computation = prev + current
         break
      case '-': 
         computation = prev - current
         break
      case '*': 
         computation = prev * current
         break
      case '/': 
         computation = prev / current
         break
      default:
         return
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
   }


   getDisplayNumber(number){
      const floatNumber = parseFloat(number)
      if(isNaN(floatNumber)) return ''
      return floatNumber.toLocaleString('en')
   }
   updateDisplay(){
      this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
      if(this.operation !== undefined){
         this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      }else this.previousOperandTextElement.innerText=''
      
      
   }

   //функционал отдельных математических операции

   makeInverse(){
      if(this.currentOperand === ''||this.currentOperand === '.')return
      this.currentOperand = this.currentOperand * -1
   }

   makePercent(){
      if(this.currentOperand === ''||this.currentOperand === '.')return
      this.currentOperand = this.currentOperand / 100
   }
   
   makeSquarePower(){
      if(this.currentOperand === ''||this.currentOperand === '.')return
      this.currentOperand = this.currentOperand **2
   }

   makeCubePower(){
      if(this.currentOperand === ''||this.currentOperand === '.')return
      this.currentOperand = this.currentOperand **3
   }

   makeEulerPower(){
      if(this.currentOperand === ''||this.currentOperand === '.')return
      const e = 2.71828 
      this.currentOperand = e  ** this.currentOperand
   }

   makeTenPower(){
      if(this.currentOperand === ''||this.currentOperand === '.')return
      this.currentOperand = 10 ** this.currentOperand
   }
}

// вытягиваем души html элементов для работы с ними в JS
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



const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

//создаем экземляр класса 
const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);


// навешиваем обработчики событий на кнопки
numberButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
   })
})

operationButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
   })
})

equalsButton.addEventListener('click',button=>{
   calculator.compute()
   calculator.updateDisplay()
})

allClearButton.addEventListener('click',button=>{
   calculator.clear()
   calculator.updateDisplay()
})

deleteButton.addEventListener('click',button=>{
   calculator.delete()
   calculator.updateDisplay()
})


percentButton.addEventListener('click',button=>{
   calculator.makePercent()
   calculator.updateDisplay()
})

inverseButton.addEventListener('click',button=>{
   calculator.makeInverse()
   calculator.updateDisplay()
})


squarePowerButton.addEventListener('click',button=>{
   calculator.makeSquarePower()
   calculator.updateDisplay()
})

cubePowerButton.addEventListener('click',button=>{
   calculator.makeCubePower()
   calculator.updateDisplay()
})

eulerPowerButton.addEventListener('click',button=>{
   calculator.makeEulerPower()
   calculator.updateDisplay()
})

tenPowerButton.addEventListener('click',button=>{
   calculator.makeTenPower()
   calculator.updateDisplay()
})



//---------------------------------------//



function expressionToRPN(string) {
   let stringStack = "";
   let operatorsStack = [];
 
   let priority;
   for (let i = 0; i < string.length; i++) {
     priority = getPriority(string.charAt(i));
 
     if (priority == 0) {
       stringStack += string.charAt(i);
     }
     if (priority == 1) {
       operatorsStack.push(string.charAt(i));
     }
     if (priority > 1) {
       stringStack += " ";
 
       while (!!operatorsStack.length) {
         if (
           getPriority(operatorsStack[operatorsStack.length - 1]) >= priority
         ) {
           stringStack += operatorsStack.pop();
           stringStack += " ";
         } else {
           break;
         }
       }
       operatorsStack.push(string.charAt(i));
     }
     if (priority == -1) {
       stringStack += " ";
       while (getPriority(operatorsStack[operatorsStack.length - 1]) != 1) {
         stringStack += operatorsStack.pop();
       }
       operatorsStack.pop();
     }
   }
 
   while (!!operatorsStack.length) {
     stringStack += " ";
     stringStack += operatorsStack.pop();
   }
   return stringStack;
 }
 
 function rpnToAnswer() {}
 
 function getPriority(token) {
   if (token === "*" || token === "/") {
     return 3;
   } else if (token === "+" || token === "-") {
     return 2;
   } else if (token === "(") {
     return 1;
   } else if (token === ")") {
     return -1;
   } else {
     return 0;
   }
 }
 
 function reversePolish(newExpr) {
   let expr = newExpr.split(" ");
   let stack = [];
   if (expr === "") {
     return 0;
   }
 
   for (let i = 0; i < expr.length; i++) {
     if (!isNaN(expr[i]) && isFinite(expr[i])) {
       stack.push(expr[i]);
     } else {
       let a = stack.pop();
       let b = stack.pop();
       if (expr[i] === "+") {
         stack.push(parseInt(a) + parseInt(b));
       } else if (expr[i] === "-") {
         stack.push(parseInt(b) - parseInt(a));
       } else if (expr[i] === "*") {
         stack.push(parseInt(a) * parseInt(b));
       } else if (expr[i] === "/") {
         stack.push(parseInt(b) / parseInt(a));
       } else if (expr[i] === "^") {
         stack.push(Math.pow(parseInt(b), parseInt(a)));
       }
     }
   }
 
   if (stack.length > 1) {
     return "ERROR";
   } else {
     return stack[0];
   }
 }
 console.log(reversePolish(expressionToRPN("(223+2+2)*2-1+3+5*(2*3)-(10+15)/(3*6)")));


 // let expr = newExpr.split(" ");
  // let stack = [];
  // if (expr === "") {
  //   return 0;
  // }

  // for (let i = 0; i < expr.length; i++) {

  //   if (!isNaN(expr[i]) && isFinite(expr[i])) {

  //     stack.push(expr[i]);
  //   } else {

  //     let a = stack.pop();
  //     let b = stack.pop();
  //     if (expr[i] === "+") {
  //       stack.push(parseInt(a) + parseInt(b));
  //     } else if (expr[i] === "-") {
  //       stack.push(parseInt(b) - parseInt(a));
  //     } else if (expr[i] === "*") {
  //       stack.push(parseInt(a) * parseInt(b));
  //     } else if (expr[i] === "/") {
  //       stack.push(parseInt(b) / parseInt(a));
  //     } else if (expr[i] === "^") {
  //       stack.push(Math.pow(parseInt(b), parseInt(a)));
  //     }
  //   }
  // }

  // if (stack.length > 1) {
  //   return "ERROR";
  // } else {
  //   return stack[0];
  // }