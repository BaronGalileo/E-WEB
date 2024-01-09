// практические занятия 1
//let num = prompt('введите число', '');
//let result = +num;
//if (result != num){
//  alert('Упс, кажется, вы ошиблись')
//  }
//else if(result % 2 === 0){
//  alert(result + ': число ЧЁТНОЕ')
//  }
//else if (isNaN(result)){
//  alert('NaN, хоть и относится к типу Number, числом не является')
//}
//else
//  alert(result + ': число НЕЧЁТНОЕ')

// практические занятия 2
//let x;
//x = true;
//
//if (typeof x === 'number'){
//console.log(x + '- число')
//}
//else if (typeof x === 'string'){
//console.log(x + '- строка')
//}
//else if (typeof x === 'boolean'){
//console.log(x + '- логический тип данных')
//}
//else
//console.log('Тип  ' + x + '  не определён')

// практические занятия 3
//let str = "Hello world";
//let reverse = str.split('').reverse().join('');
//
//let result = 1 / 0;

//function reverseString(str) {
//    let reverse = "";
//    for (let i = str.length - 1; i >= 0; i--) {
//
//        reverse += str[i];
//    }
//    return reverse;
//}
//
//console.log(reverseString('Hello world'))


//практические занятия 4

//function getRandomArbitrary(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//  return  Math.floor(Math.random() * (max - min) + min);
//}
//
//console.log(getRandomArbitrary(1, 100))

//практические занятия 5
//
//let arr = [1,2,4,6,8];
//
//let result = arr.length
//console.log('Всего элементов в массиве: ' + result);
//for (let i = 0; i < arr.length; i++){
//  console.log('Каждый элемент массива: ' + arr[i]);
//
//}

//практические занятия 6

//let arr = [1,1,'1',1,1];
//let theValue = arr[0];
//for (i = 0; i < arr.length; i++) {
//  if (arr[i] === theValue &&  i < arr.length - 1) {
//    console.log('n')
//  }
//  else if (i == arr.length - 1 && arr[i] === theValue){
//    console.log('True')
//
//  }
//    else {
//      console.log(`False : ${arr[i]} не совпадают ${theValue}`)
//      break;
//  }
//
//}

//практические занятия 7

//let arr = [1,2,3,4,5, 0,];
//let nulChet = 0;
//let nulNechet = 0;
//let nulNol = 0;
//let nоtNumber = 0;
//for (i = 0; i < arr.length; i++){
//  if (arr[i] % 2 === 0 && arr[i] !== 0){
//    nulChet += 1
//  }
//  else if (arr[i] === 0){
//    nulNol += 1
//  }
//  else if (arr[i] % 2 === 1){
//    nulNechet += 1
//  }
//  else
//    {
//      console.log(arr[i])
//      nоtNumber += 1
//    }
//}
//console.log(`Четные чмсла : ${nulChet}\n Нечетные числа: ${nulNechet} \n Нуль в массиве : ${nulNol}\n Другие : ${nоtNumber}`)


//практические занятия 8

let myMap = new Map();
myMap.set('key', 'vav');
myMap.set(1, 'number');
myMap.set('1', 'string');
myMap.set('name', 'Alex');

for (let n of myMap.keys()){

  console.log(`Ключ - ${n}  Значение ${myMap.get(n)}`);
}



Пример вызова функций

function agreCookies(question, yes, no){
  if (confirm(question)) yes();
  else no();
}

function agreYes() {
  console.log('Вы приняли соглашение')
}

function agreNo() {
  console.log('Вы  Не приняли соглашение')
}

agreCookies('Нужно ваше согласие', agreYes, agreNo)