// Cho bộ dữ liệu về users như sau: data.js
console.log(users)
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// let n = prompt("Nhập n: ");
// n = Number(n);

// let result = false;
// for(let user of users){
//     if(user.id === n){
//         result = user;
//     }
// }
// if(result === false){
//     console.log("User không tồn tại.");
// } else{
//     console.log("Kết quả tìm được: ", result)
// }

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// let keyword = prompt("Nhập keyword: ");
// for(let user of users){
//     let fullName = user.first_name + " " + user.last_name;

//     if(fullName.toLowerCase().includes(keyword.toLowerCase()) === true){
//         console.log("Email của user có chứa keyword là: ", user.email)
//     }
// }

// -Đếm số lượng user có age > 50.
// let count = 0;
// for(let user of users){
//     if(user.age > 50){
//         count = count + 1;
//     }
// }
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// const status = {
//     married: 0,
//     unmarried: 0
// }
// for(let user of users){
//     if(user.is_married === true){
//         status.married = status.married + 1;
//     } else {
//         status.unmarried = status.unmarried + 1;
//     }
// }

// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }
const result = {};
for(let user of users){
    if(result.hasOwnProperty(user.job)){
        result[user.job] = result[user.job] + 1;
    } else{
        result[user.job] = 1;
    }
//     c2
//     result[user.job] = result[user.job] ? result[user.job] + 1 : 1
}

console.log(result);