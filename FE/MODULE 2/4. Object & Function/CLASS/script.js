// //Khai bao Object
// //C1
// const obj1 = {}
const obj2 = {
    name: 'T3H',
    address: 'HaNoi'
}

// //C2:
// const obj3= new Object();
// const obj4 = new Object({
//     name: 't3h',
//     address: 'HaNoi'
// })

for (let a in obj2){
    console.log(a);
    console.log(obj2[a])
    console.log('-------')
}


console.log('-------------------')

function add(a,b){
    let sum = a +b;
    return sum;
}
//thực thi câu lệnh và trả về biến sum
function subtract(a,b){
    let sub = a- b;
    console.log(sub)
}
//thực thi câu lệnh và in ra luôn kết quả (không có trả về)
let result1= add(10,20)     //thực hiện gọi làm thông qua một biến và gán value cho a và b
let result2 = add(30,5)
console.log(result1);       //in ra biến vừa gán
console.log(result2)
let result3 = subtract(10,3)    
console.log(result3)        //undefined (không có dữ liệu trả về)
subtract(2,1)               //gọi trực tiếp hàm không thông qua biến (trả về kết quả luôn)
console.log('-----------------------')

let input = prompt('Nhap ten: ');

function helloworld(input){
    console.log('Helloworld '+input);
}

let a = Number(prompt('Nhap a: '))
let b = Number(prompt('Nhap b: '))

function tong(a,b){
    let sum = (a+b)*(a+b);
    return sum;
}

//  let yc1 = helloworld(input);
// console.log(yc1)
helloworld(input);
//  console.log(helloworld(input)) : chuong trinh se in ra 2 lan boi trong function da co console.log 

let yc2 = tong(a,b);
console.log(yc2)
//console.log(tong(a,b))