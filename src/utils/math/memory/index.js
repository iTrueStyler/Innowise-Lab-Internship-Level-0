import { currentOperandTextElement } from '../../helpers/constants.js';

let memory;

export function memoryClean() {
  memory = 0;
  alert(`"MemoryClean" now memory : ${memory}`);
}

export function memoryPlus() {
  memory = memory + +currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = memory;
  alert(`"MemoryPlus" now memory : ${memory}`);
}

export function memoryMinus() {
  memory = memory - +currentOperandTextElement.innerText;
  currentOperandTextElement.innerText = memory;
  alert(`"MemoryMinus" now memory : ${memory}`);
}

export function memoryRead() {
  if (!currentOperandTextElement.innerText && !memory) {
    alert('nothing to add in memory');
    return;
  }
  if (!memory) {
    if (isNaN(parseFloat(currentOperandTextElement.innerText))) {
      alert('You get a wrong number');
      currentOperandTextElement.innerText = '';
      return;
    }
    memory = parseFloat(currentOperandTextElement.innerText);

    alert(`add ${currentOperandTextElement.innerText} to memory,now memory : ${memory}`);
    // currentOperandTextElement.innerText = ''
  } else {
    alert(`now memory : ${memory}`);
    currentOperandTextElement.innerText = memory.toString();
  }
}
