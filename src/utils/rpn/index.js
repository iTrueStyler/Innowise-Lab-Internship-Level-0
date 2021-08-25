
export function calculateExpression(expression) {
   return reversePolish(expressionToRPN(prepareExpression((expression))))
}
 //Вспомогательная функция для подготовки выражения к переводу в обратную польскую нотацию
 function prepareExpression(expression) {
   let preparedExpression = "";
 
   for (let i = 0; i < expression.length; i++) {
     let symbol = expression.charAt(i);
     if (symbol == "-") {
       if (i == 0) {
         preparedExpression += "0";
       } else if (expression.charAt(i - 1) == "(") {
         preparedExpression += "0";
       }
     }
     preparedExpression += symbol;
   }
   return preparedExpression;
 }
 
 //Вспомогательная функция определения приоритета операций
  function getPriority(token) {
   if (token === "*" || token === "/") {
     return 3;
   } else if (token === "+" || token === "-") {
     return 2;
   } else if (token === "(") {
     return 1;
   } else if (token === ")") {
     return -1;
   } else if (token === "^") {
     return 4;
   } else {
     return 0;
   }
 }
 
 
 //Функция преобразования в обратную польскую нотацию
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
 
 
 
 //Функция вычисления обратной польской нотации
 function reversePolish(newExpr) {
   let operand = "";
   let stack = [];
 
   for (let i = 0; i < newExpr.length; i++) {  
 
     if (newExpr.charAt(i) == " ") { continue; }
 
     if (getPriority(newExpr.charAt(i)) == 0) {
       while (newExpr.charAt(i) !== " " && getPriority(newExpr.charAt(i)) == 0) {
         operand += newExpr.charAt(i++);
         
 
         if (i == newExpr.length) { break; }
         
       }
       stack.push(+operand);
 
       operand = "";
       
     }
     
     if (getPriority(newExpr.charAt(i)) > 1) {
       let a = stack.pop();
       let b = stack.pop();
       if (newExpr[i] === "+") {
         stack.push(parseFloat(a) + parseFloat(b));
       } else if (newExpr[i] === "-") {
         stack.push(parseFloat(b) - parseFloat(a));
       } else if (newExpr[i] === "*") {
         stack.push(parseFloat(a) * parseFloat(b));
       } else if (newExpr[i] === "/") {
         stack.push(parseFloat(b) / parseFloat(a));
       } else if (newExpr[i] === "^") {
         stack.push(Math.pow(parseFloat(b), parseFloat(a)));
       }
     }
 
   }
   
  
   if (stack.length > 1) {
     return "ERROR";
   } else {
     return stack[0];
   }
   
 }
 