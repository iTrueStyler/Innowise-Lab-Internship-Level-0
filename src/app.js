import "./styles.css";

import { calculateExpression } from './utils/rotatePolishNotation/index.js'
import { Mathemathic, eulerConstant } from './utils/math/index.js'
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
  memoryReadButton
} from './utils/helpers/constants.js'




function clear() {
  previousOperandTextElement.innerText = ''
  currentOperandTextElement.innerText = ''
}

function appendSymbol(symbol) {
  if (symbol === '.' && currentOperandTextElement.innerHTML.includes('.')) return

  currentOperandTextElement.innerText += symbol.toString()

}

function deleteSymbol() {
  currentOperandTextElement.innerText = currentOperandTextElement.innerText.toString().slice(0, -1)
}


function decimalInverse() {
  if (!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText = (1 / calculateExpression(currentOperandTextElement.innerText)).toFixed(5)

}


function percent() {
  if (!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText = calculateExpression(currentOperandTextElement.innerText) / 100
}
function makeInverse() {
  if (!currentOperandTextElement.innerText) return
  console.log(currentOperandTextElement.innerText)
  currentOperandTextElement.innerText = calculateExpression(currentOperandTextElement.innerText) * -1
}

function logarithmOnTen() {
  if (!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText = Mathemathic.logarithm(parseFloat(currentOperandTextElement.innerText), 10).toFixed(5)
}

function logarithm() {
  if (!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText = Mathemathic.logarithm(parseFloat(currentOperandTextElement.innerText)).toFixed(5)
}

function squarePow() {

  if (!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.pow(expression, 2)
}

function cubePow() {
  if (!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.pow(expression, 3)
}

function tenPow() {
  if (!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.constBasePow(expression, 10)
}

function eulerPow() {
  if (!currentOperandTextElement.innerText) return
  let expression = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.constBasePow(expression, eulerConstant)
}

function makePower() {
  if (!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText += '^'
}
function addRootSymbol() {
  if (!currentOperandTextElement.innerText) return
  currentOperandTextElement.innerText += '√'
}
function makeRoot(base) {
  if (!currentOperandTextElement.innerText) return
  let number = currentOperandTextElement.innerText
  currentOperandTextElement.innerText = Mathemathic.rootPow(base, number)
}

let memory;
function memoryClean() {
  memory = 0;
  alert(`"MemoryClean" now memory : ${memory}`)
}


function memoryPlus() {
  memory = memory + +currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = memory;
  alert(`"MemoryPlus" now memory : ${memory}`)
}

function memoryMinus() {
  memory = memory - +currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = memory;
  alert(`"MemoryMinus" now memory : ${memory}`)
}


function memoryRead() {
  if (!currentOperandTextElement.innerText && !memory) {
    alert('nothing to add in memory')
    return
  }
  if (!memory) {
    if (isNaN(parseFloat(currentOperandTextElement.innerText))) {
      alert('You get a wrong number')
      currentOperandTextElement.innerText = ''
      return;
    }
    memory = parseFloat(currentOperandTextElement.innerText)

    alert(`add ${currentOperandTextElement.innerText} to memory,now memory : ${memory}`)
    // currentOperandTextElement.innerText = ''

  }
  else {
    alert(`now memory : ${memory}`)
    currentOperandTextElement.innerText = memory.toString()
  }


}

// навешиваем обработчики событий на кнопки
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendSymbol(button.innerText)

  })
})


operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendSymbol(button.innerText)

  })
})

inverseButton.addEventListener('click', event => {
  makeInverse()
  console.dir(event.target)
})
allClearButton.addEventListener('click', button => {
  clear()
})

deleteButton.addEventListener('click', button => {
  deleteSymbol()
})

equalsButton.addEventListener('click', button => {
  let expression = currentOperandTextElement.innerText
  console.log(expression)
  previousOperandTextElement.innerText = calculateExpression(expression);
  currentOperandTextElement.innerText = ''
})

percentButton.addEventListener('click', button => {
  percent()
})

logButton.addEventListener('click', button => {
  logarithm()
})

logTenButton.addEventListener('click', button => {
  logarithmOnTen()
})

squarePowerButton.addEventListener('click', button => {
  squarePow()
})

cubePowerButton.addEventListener('click', button => {
  cubePow()
})

eulerPowerButton.addEventListener('click', button => {
  eulerPow()
})

tenPowerButton.addEventListener('click', button => {
  tenPow()
})

basePowerButton.addEventListener('click',
  button => {
    makePower()
  })

decimalInverseButton.addEventListener('click', button => {
  decimalInverse()
})

rootPowButton.addEventListener('click', () => {
  addRootSymbol()
})

squareRootButton.addEventListener('click', () => {
  makeRoot(2)
})

cubeRootButton.addEventListener('click', () => {
  makeRoot(3)
})
memoryCleanButton.addEventListener('click', () => {
  memoryClean()
})
memoryPlusButton.addEventListener('click', () => {
  memoryPlus()
})
memoryMinusButton.addEventListener('click', () => {
  memoryMinus()
})
memoryReadButton.addEventListener('click', () => {
  memoryRead()
})