//Basic Requirements
//1
function sum(number) {
    if (number === 0){
        return 0
    }
      
        return  number + sum(number-1)
 }  

 //2
 function factorial(number) {
    if(number === 0){
        return 1
    } 
      return number * factorial(number-1)
  }  

  //3
  function repeatString(string, number) {
    if (number === 0){
        return ""
    }
     return string + repeatString(string, number-1)
 }  

 //4
 function fibonacci(number) {
    if (number === 0){
        return 0;
    }
     if (number === 1){
         return 1;
     }
     return fibonacci(number-2) + fibonacci(number-1)
 }  

 //5
 function multiplyBy10(firstNumber, secondNumber) {
    if (secondNumber === 0){
        return firstNumber;
    }
     return 10*multiplyBy10(firstNumber, secondNumber-1)
 }  

 //More Practice
 //1
 function sumBetween(start, end) {
    if (start< end){
         if (end === start){
             return start
         }
         return end+ sumBetween(start, end-1)
     }
     else{
         if (end === start){
             return start;
         }
         return end + sumBetween(start, end+1)
     }
 }

 //2
 function inc(x){
    return x + 1
}
function dec(x){
    return x - 1
}
function add(number1, number2){
    return inc(number1) + dec(number2)  
  }

  //3
  

