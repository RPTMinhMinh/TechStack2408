// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty 
// qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
let growth = [
    [5,8,9,16], // năm 1
    [2,7,1,9], // năm 2
    [5,6,8,12], // năm 3
    [10,2,1,8], // năm 4
    [20,4,9,1] // năm 5
]
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng
//  của từng năm (Tính trung bình theo hàng).
const result = [];
for(let element of growth){
    console.log(element)
    let sum = 0;
    for(let number of element){
        sum = sum + number;
    }
    console.log(sum)
    const avg = sum / element.length;
    result.push(avg);
}

// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
let max = result[0];
for(let element of result){
    if(element > max){
        max = element;
    }
}

// -Tìm giá trị tăng trưởng theo quý lớn nhất.
let max2 = growth[0][0];
for(let row of growth){
    for(let number of row){
        if(number > max2){
            max2 = number;
        }
    }
}

// -Tính giá trị tăng trưởng trung bình theo quý của các năm 
// (Tính trung bình theo cột).
const listAvg = [];
for(let col = 0; col<growth[0].length; col++){
    let sum = 0;
    for(let row = 0; row<growth.length; row++){
        console.log(growth[row][col]);
        sum = sum + growth[row][col];
    }
    const avg = sum/growth.length;
    listAvg.push(avg);
}
console.log(listAvg);