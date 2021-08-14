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
      // this.updateDisplay()
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
}

// вытягиваем души html элементов для работы с ними в JS
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
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