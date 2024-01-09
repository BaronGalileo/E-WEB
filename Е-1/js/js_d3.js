//Практика 1

//function parsingArray(array){
//const arr = array;
//let nulChet = 0;
//let nulNechet = 0;
//let nulNol = 0;
//let nоtNumber = 0;
//for (i = 0; i < arr.length; i++){
//    if (typeof arr[i] === 'number' && !isNaN(arr[i])){
//        if (arr[i] % 2 === 0 && arr[i] !== 0){
//        nulChet += 1
//    }
//        else if (arr[i] === 0){
//        nulNol += 1
//}
//        else
//            nulNechet += 1
//}   else
//        nоtNumber += 1
//
//}console.log(`Четные числа : ${nulChet}\n Нечетные числа: ${nulNechet} \n Нуль в массиве : ${nulNol}\n Другие : ${nоtNumber}`)
// }
//
//let array = [1,2,3,4,5,6,7, 0, 0, 'str', NaN]
//parsingArray(array)

// Практика 2

//function getPrimeNumber(num){
//  if (num <= 1000){
//    let count = 0;
//    for (i = 1; i <= num; i++){
//      if(num % i === 0){
//        count +=1
//      }
//      }
//    if (count === 2){
//      return`Число ${num} является простым `
//    }
//    else {
//      return`Число ${num} НЕ является простым`
//    }
//  }
//  else{
//    return `Число не должно быть больше 1000`
//        }
//  }
//
//console.log(getPrimeNumber(4))

// Практика 3

//function showNumber(){
//  let a = +prompt('Введите число')
//  return a
//}
//
//
//function numFunc(num){
//  let a = showNumber()
//
//  let sum = num + a
//  return sum
//
//}
//
//
//console.log(numFunc(6))

// или так

//function example(a, func){
//const num = func();
//return function(){
//return a + num
//}
//}
//
//function argFunc(){
//let b = +prompt('Введите число')
//return b
//}
//
//
//const resultFunc = example(7, argFunc)
//console.log(resultFunc())

// Практика 4

//function showNumInConsole(){
//let start = +prompt("Введите первое число");
//let finish = +prompt("Введите второе число");
//if (start < finish){
//
//let showNumber = setInterval(function() {
//console.log(start);
//if (start == finish){
//clearInterval(showNumber);
//}
//start++;
//}, 1000);
//}else if(start == finish){
//console.log('Числа должны быть разные')
//}else {
//let showNumber = setInterval(function() {
//console.log(start);
//if (start == finish){
//clearInterval(showNumber);
//}
//start--;
//}, 1000);
//
//}
//}
//showNumInConsole()


// Практика 5

//const resultExponentiation = (x, n) => {
//  return (x**n)
//}
//
//console.log(resultExponentiation(3,2))