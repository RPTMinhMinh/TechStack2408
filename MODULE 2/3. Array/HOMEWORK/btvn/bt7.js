// Nhập vào 1 dãy số s và 1 số n 
// Mỗi số cách nhau bởi dấu ‘,’. 
// s = '1,2,3,4,5,6'
// split
// s = [1,2,3,4,5,6]
// s = [1,4,9,16,25,36]
// n = 3
// -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s. 
// s = '1,4,9,16,25,36'
// -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n. 
// 3
// 4
// 5
// 6
// -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.

let s = prompt('Nhập dãy số (các số ngăn cách bởi dấu ,)');
// let s = '1,2,3,4,5,6,7,8,9,10,11,12';
// let n = 13
let n = Number(prompt('Nhập số n: '));

s = s.split(',');
// -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s. 
let result = [];
for(let element of s){
    element = Number(element);
    element = element ** 2;
    result.push(element);
}
console.log(result);
result = result.join(',')
console.log(result);

// -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n. 
for(let element of s){
    element = Number(element);
    if(element >= n){
        console.log(element);
    }
}

// -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.
let finded = false;
for(let element of s){
    element = Number(element);
    if(element === n){
        console.log(element);
        finded = element;
        break;
    }
}

if(finded === false){
    console.log('Không tìm thấy giá trị bằng n')
} else{
    console.log('Số đầu tiên trong dãy có giá trị bằng n là:', finded);
}