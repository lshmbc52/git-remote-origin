'use strict';
//let name = "lee";
//console.log(name);

//var score = 80
//console.log(score)
// {
//     let name = "ellie";
//     console.log(name);
//     name ="hello";
//     console.log(name);
// }

// const count = 17;
// const size = 17.1;

// console.log(`value: ${count}, type:${typeof count}`);
// console.log(`value: ${size}, type:${typeof size}`);

// const infinity = 1 / 0;
// const negainfinity = -1 /0;
// const nAn = 'not a number'/ 2;

// console.log('infinity');
// console.log('negainfinity');
// console.log('nAn');

// const char='c';
// const brenden ='brenden';
// const greeting = 'hello' + brenden;
// console.log(`value: ${greeting},type: ${typeof greeting}`);
// const helloBob = `hi ${brenden}!`;
// console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// const canRead = true;
// const test = 3 < 1;

// console.log(`value: ${canRead}, type: ${typeof canRead}`);
// console.log(`value:${test}, type: ${test}`);

// let nothing = null;
// console.log(`value: ${nothing}, type: ${typeof nothing}`);

// let x;
// console.log(`value: ${x}, type:${typeof x}`);

// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');

// console.log(symbol1 === symbol2);

// let text = 'hello';
// console.log(text.charAt(0));

// console.log(`value: ${text}, type: ${typeof text}`);

// text = 1;

// console.log(`value: ${text}, type: ${typeof text}`);
// text = '7' + 5

// console.log(`value: ${text}, type: ${typeof text}`);
// text = '8'/ '2'

// console.log(`value: ${text}, type: ${typeof text}`);

// const isLeapYear = function(year){
//     const leapyear =
//     (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
     

//     if (leapyear) {
//         return true
//     } else {
//         return false
//     }
// }

// const isLeapYear = function(year) {
//     return (year % 4 === 0)
//     && (year % 100 !== 0)
//     ||(year % 400 === 0)
// }

// console.log(`2020은 윤년? === ${isLeapYear(2020)}`)
// console.log(`2010은 윤년? === ${isLeapYear(2010)}`)
// console.log(`1982은 윤년? === ${isLeapYear(1982)}`)


// const min = function(array){
//     let output = array[0]

//     for (const value of array){
//         if(output > value) {
//             output = value
//         }
//     }
//     return output
           
//     }
  

// console.log(min([52, 276, 32, 103, 275, 24,57]))

// const max = function(array){
//     let output = array[0]

//     for (const value of array){
//         if(output < value) {
//             output = value
//         }
//     }
//     return output
           
//     }
  

// console.log(max([52, 276, 32, 103, 275, 24,57]))


// const f = function(a,b,c){
//     console.log(a,b,c)
// }

// const a = [1,2,3]

// f(...a)

// const multiplyAll = function(start, end) {
//     let output = 1
//     for (let i = start; i <= end; i++) {
//        output *= i
//     }
//     return output
// }
// console.log(multiplyAll(1,2))
// console.log(multiplyAll(1,3))
    

// const test = function(a){
//     console.log(a)
// }

// test(10)
// test("good")

// const f = function(){
//     console.log("안녕하세요?")
// }

// test(f)

// const test = function(a){
//     a(10)
// }

// const f = function(a){
//     console.log( `${a}번째 안녕하세요`)
// }

// test(f)


// const test = function (array,callback){
//     for (const value of array)
//         callback(value) 
//     }

// const f = function(callback) {
// console.log(`${callback}번째 안녕하세요`)
// }
// test([52,273,103,32],f)

// test([52,273,103,32],function(callback)
// { console.log(`${callback}번째 안녕하세요`)
// })

//let array=[273,52,103,32,57]
// array.forEach(function(value, index){
//     console.log(`${index}번째 값은 ${value}다`)
// })

// array = array.filter(function (value,index){
//     return value % 2 === 1
// })

// console.log(array)

// array = array.map(function (value, index) {
//     return value + "!!"
// })

//array = array.filter((value,index)=> value %2 === 0)
// console.log(array)

// array = array.map((value, index)=> value +"!!")
// // console.log(array)

// function add(num1, num2){
//     return num1 +  num2
// }

// function divide(num1, num2) {
//     return num1 / num2
// }

// function surprise(operation) {
//     const result = operation(2,4);
//     console.log(result)
// }

// surprise(divide)

// const doSomething = add

// const result = doSomething(2,3)
// console.log(result)

// const result2 = add(2,3)
// console.log(result2)
// function print(name,age){
//     console.log(`${name} ${age}`)
// }
// print('james',14)

// function add(x,y) {
//     return x + y
// }

// var sub = function(x,y) {
//     return x -y;


// const a = setTimeout(function (){
//     console.log(`setTimeout함수임`)
// },1000)

// const b = setInterval(function(){


//     console.log(`setInterval 함수임`)
// },1000)

// console.log(a,b)

// clearTimeout(a)
// clearInterval(b)

// f()

// f = function(){
//     console.log(`익명함수`)
// }

// function f(){
//     console.log(`선언적 함수`)
// }

// f()

// const array =['사과,','배','귤','바나나']

// array.forEach(function(value,index,array){
//     console.log(index)
// })

// array.forEach((value)=> {
//     console.log(value)
// })

// const object ={
//     name:'cloud',
//     age: 6,
//     bark: function () {
//      console.log(`${this.age}살임`)
    
//     //console.log(this)
//     },

//     sleep: () => {
//      //   console.log(`${object.name}가 잔다`)
//      console.log(this)
//     }
// }
// object.bark()
// object.sleep()

// const pet ={
//     name:'cloud',
//     age: 5
// }
// pet.color ='brown'
// delete pet.color

//console.log(pet)
// const 사용

// const b =() => {}
// console.log(typeof(b))
// console.log(typeof(b) === 'function')

// function printLang(code){
//     return printLang._lang[code]
// }

// printLang._lang={
//     ko:'한국어',
//     en:'영어',
//     ja:'일어',
//     fr:'프랑스어',
//     es:'스페인어'
// }

// console.log('printLang("ko"):', printLang('ko'))
// console.log('printLang("en"):', printLang('en'))

const degree = 90
const rad = degree *Math.PI / 180

console.log(Math.sin(rad))