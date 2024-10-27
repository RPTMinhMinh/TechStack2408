const score = 5.3;

//falsy     <=>     false
// '' => chuoi rong
// 0
// null
// undefined
// NaN => not a number  (2 * 'a' = NaN)

//truthy    <=>     true

if (score >= 8.0) {
    console.log('Ban la hs gioi')
} else if (score >= 6.5 && score < 8) {
    console.log('Ngu')
} else if (score < 6.5 && score >= 5) {
    console.log('Rat ngu')
} else {
    console.log('het cuu')
}


// if(1){
//     console.log('Ban la hs gioi')
// }
// 1 là giá trị truthy



console.log('---------------------------')
//-------------------------------------



let day = 7;
// if (day < 2 || day > 8) {
//     console.log('Nhap tu 2 den 8 giup t')
// } else {
switch (day) {
    case 2:
        console.log('thu 2')
        break
    case 3:
        console.log('thu 3')
        break
    case 4:
        console.log('thu 4')
        break
    case 5:
        console.log('thu 5')
        break
    case 6:
        console.log('thu 6')
        break
    case 7:
        console.log('thu 7')
        break
    case 8:
        console.log('chu nhat')
        break
    default:
        console.log('nhap tu 2 den 8 thoi')
        break
}
// }



console.log('---------------------------')
//-------------------------------------



// let age = 19;
// let message;

// if (age >= 18) {
//     message = 'nguoi lon'
// } else {
//     message = 'tre con'
// }
// console.log(message)

let age = 16;
// let message = age >= 18 ? 'nguoi lon' : 'tre trau'
let message = age >= 18 ? 'nguoi lon' : age < 18 && age > 15 ? 'tre trau' : 'ngu';

console.log(message)



console.log('---------------------------')
//---------------------------------------



for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log('---------------------------')
//---------------------------------------



for (let i = -10; i <= 50; i = i + 2) { //i++
    if (i != 0) {     //if(i % 2 == 0 && i != 0)
        console.log(i);
    }
}



console.log('---------------------------')
//----------------------------------------



let sum = 0;
for (let i = -10; i <= 50; i = i + 2) { //i++
    if (i != 0) {    //if(i % 2 == 0 && i != 0)
        sum = sum + i;
    }
}
console.log(sum);



console.log('----------------------------------');
//-------------------------------------------------



//Nhập gtri từ bàn phím, nếu giá trị chẵn thì ctr kết thúc
// let number = prompt('Nhập giá trị để kiểm tra: ')
// console.log(number);

let number;
do{
    number = prompt('Nhap gia tri: ')
    number = Number(number)         //convert kieu du lieu sang number
} while(number % 2 == 1)

console.log(number)
console.log(typeof number);

//prompt mac dinh la string
// can ep kieu



console.log('-----------------------------------------------')
//------------------------------------------------------------



// for (let i = 1; i <= 5; i++){
//     console.log(i);
//     if(i == 3){
//         break;  
//     }
// }
// tu khoa break re dung vong lap tai i == 3 ma khong can dieu kien = false
// ( Ket thuc vong lap som )
for(let i = 1 ; i <= 5 ; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}
// tu khoa continue se bo qua vong lap tai i == 3 va tiep tuc thuc hien vong lap den khi dieu kien = false
// ( Nhay sang buoc tiep theo, bo qua buoc hien tai )
