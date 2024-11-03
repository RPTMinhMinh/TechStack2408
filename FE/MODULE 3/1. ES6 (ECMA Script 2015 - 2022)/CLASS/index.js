// function sum(a = 0, b = 0, c = 0) { // default parameters
//     // if(a === undefined){
//     //     a = 0
//     // }
//     // if(b === undefined){
//     //     b = 0
//     // }
//     // if(c === undefined){
//     //     c = 0
//     // }
//     return a + b + c;
// }

// sum()
// sum(1)  //NaN   =>  1
// // a = 1, b = undefined, c = undifined
// // 1 + undefined + undefined = NaN  
// sum(1,2)    //NaN   =>  3
// // a = 1, b = 2, c = undifined
// // 1 + 2 + undefined = NaN  
// sum(1,2,3);     //6
// // a = 1, b = 2, c = 3
// // 1 + 2 + 3 = 6  

//---------------------------------------------------

// const name = 'minh'
// const age = 18    
// const gender = 'boy'      
// const greeting = `hello         
// chao ${name}
// toi cung ten la ${name}
// va toi ${age}
// va toi la ${gender === 'boy' ? 'con trai' : 'con gai'}`;                         //template literals: viet noi suy va xuong dong trong 1 chuoi
// console.log(greeting)

//---------------------------------------------------

// const fruits = ['apple' , 'orange', 'banana']
// // let firstFruit = fruits[0]  //apple
// // let secondFruit = fruits[1] //orange
// const [,firstFruit, secondFruit] = fruits

// console.log(firstFruit) //orange
// console.log(secondFruit)//banana



// const person = {
//     name: 'minh',
//     age: 20,
// }
// // const name = person.name
// // const age = person.age
// const { name: personName, age = 20, gender = 'girl' } = person

// console.log(personName)     //minh
// console.log(age)            //18
// console.log(gender)         //girl

//---------------------------------------------------

// //property shorthand
// const name = 't3h'
// const age = 18
// // const student = {name: name, age: age}
// const student = {name, age}
// console.log(student)

// method definition shorthand
// // const obj = {
// //     logger: function(){
// //         console.log('hello')
// //     }
// // }
// const obj = {
//     logger(){
//         console.log('hello')
//     }
// }
// obj.logger()

//conputed property names

//---------------------------------------------------

// arrow function
// // function sum(a,b){
// //     return a + b;
// // }

// var/let/const function_name = (param1, param2, ..., paramN) => {
//    block code
// }

// const sum = (a,b) =>{
//     return a+ b;
// }

//rut gon (block code co 1 dong) - loai bo ngoac {} va returt
// const sum = (a, b) => a+b

// console.log(sum(2,3))


// const obj = {
//     name: 'minh',
//     logger(){

//     }
// }
// trong slide

//---------------------------------------------------

//Block-Scoped Constructs Let and Const

//scope
// {
//     var a = 'html'
//     let b = 'css'
//     const c = 'js'
// }
// console.log(a)  //html
// console.log(b)  //error
// console.log(c)  //error

// //var number
// console.log(number);    //undefined
// var number = 10
// console.log(number);    //10

//---------------------------------------------------

import {add, subtract} from "./math.js";

add(1,2)
subtract(5,4)