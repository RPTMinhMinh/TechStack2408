// let car1 = 'Saab';
// let car2 = 'Volvo';
// let car3 = 'BMW';

// const cars = ['Saab', 'Volvo', 'BMW'];

// const numbers = [1, 2, 3];
// const fruits = ['Apple', 'Banana', 'Orange'];
// const arrs = [1, 2, true, false, null, undefined, 'ABC'];


console.log('----------------------------------------------')
//----------------------------------------------------------



// const arrs1 = [];
// const arrs2 = [1,2,3,4,5];

// const arrs3 = new Array();
// const arrs4 = new Array('a','b','c')

// console.log(arrs1)
// console.log(arrs2)
// console.log(arrs3)
// console.log(arrs4)



console.log('----------------------------------------------')
//----------------------------------------------------------


//truy xuat va thay doi gia tri

// const fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits); // ['Apple', 'Banana', 'Orange']
// console.log(fruits[0]); // 'Apple'

// fruits[0] = 'Tomato';
// console.log(fruits[0]); // 'Tomato'



console.log('----------------------------------------------')
//----------------------------------------------------------



// const fruits = ['Apple', 'Banana', 'Orange'];

// // Dùng vòng lặp này khi cần sử dụng index
// console.log('Duyet mang vowi for bth')
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log('Duyet mang vowi for of')
// // Dùng vòng lặp này khi không quan tâm đến index
// for (const fruit of fruits) {
//     console.log(fruit);
// }


console.log('----------------------------------------------')
//----------------------------------------------------------


let arrs1 = [2,4,6,8];
console.log(arrs1[0])
console.log(arrs1[3])

let sum = 0;
sum = arrs1[1] + arrs1[2];
console.log(sum);

const temp = arrs1[1];
arrs1[1] = arrs1[3];
arrs1[3] = temp;

console.log(arrs1);


console.log('----------------------------------------------')
//----------------------------------------------------------



const numbers2 = [5,10,15,20,25];

for(let number of numbers2){
    if(number % 2 === 0){
        console.log(number);
    }
}



let sum2 = 0;
for(let number of numbers2){
    sum2 = sum2+number;
}
console.log(sum2)


let min = numbers2[0];
for(let number of numbers2){
    if(number < min){
        min = number;
    }
}
console.log(min);
