"use strict";
// Định nghĩa một type Student với các thuộc tính:
// 	- id: number (mã sinh viên)
// 	- name: string (tên sinh viên)
// 	- age: number (tuổi)
// 	- grades: array of numbers (điểm các môn)
// 2. Tạo một mảng students kiểu Student[] và thêm một số sinh viên mẫu.
const students = [
    { id: 1, name: "minh", age: 18, grades: [10, 10, 9] },
    { id: 2, name: "abc", age: 20, grades: [2, 3, 4] },
    { id: 3, name: "xyz", age: 22, grades: [3, 4, 5] },
    { id: 4, name: "Nhat Minh", age: 19, grades: [10, 9, 9] }
];
// 3. Viết hàm getAverageGrade nhận vào mã sinh viên và tính điểm trung bình cho sinh viên đó.
//  duyệt mảng để tìm ra id
//  ktra neu co: tao object moi student va gan cho element trung voi findByID vao student
//  neu khong: khong tim thay
//  kiem tra xem obj student phai khac null
//  neu khac null: tinh tong
function getAverageGrade(findByID) {
    let sum = 0;
    let total = 0;
    let check = false;
    let student = null;
    for (let element of students) {
        if (element.id === findByID) {
            check = true;
            student = element;
            console.log(student);
            break;
        }
    }
    if (!check) {
        console.log(`khong tim thay id ${findByID}`);
    }
    if (student !== null) {
        for (let element of student.grades) {
            sum += element;
            total = sum / student.grades.length;
        }
        console.log(`Tong diem : ${total}`);
    }
}
getAverageGrade(3);
console.log(`-----------------------------------------------------------`);
// 4. Viết hàm findStudentByName nhận vào tên và tìm sinh viên có tên đó trong mảng.
//duyet mang de ktra 
//neu name = findByID -> in ra
// neu khum -> error
function findStudentByName(findByName) {
    let check = false;
    let student = null;
    for (let element of students) {
        if (element.name.toLowerCase().trim().includes(findByName.toLowerCase().trim())) {
            check = true;
            student = element;
            console.log(student);
            // break;
        }
    }
    if (!check) {
        console.log(`khong tim dc sinh vien ten : ${findByName}`);
    }
}
findStudentByName("minh");
console.log(`-----------------------------------------------------------`);
// 5. Viết hàm addStudent để thêm sinh viên mới vào danh sách.
//push
function addStudent(add) {
    students.push(add);
    console.log(students);
}
addStudent({ id: 5, name: "hehe", age: 16, grades: [1, 1, 2] });
console.log(`-----------------------------------------------------------`);
// 6. Viết hàm removeStudentById để xoá sinh viên khỏi danh sách theo mã sinh viên.
//duyet mang de ktra
//neu co id = deleteByID -> xoa sinh vien
//neu khong -> error
function removeStudentById(deleteByID) {
    let check = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === deleteByID) {
            check = true;
            const deleteStudent = students[i];
            students.splice(i, 1);
            console.log(`xoa nguoi dung co id : ${deleteStudent.id} co ten : ${deleteStudent.name}`);
            console.log(students);
            break;
        }
    }
    if (!check) {
        console.log(`khum tim thay nguoi dung co id : ${deleteByID}`);
    }
}
removeStudentById(3);
// const deleteStudent = students[i]
// students.splice(i, 1);
// console.log(`xoa nguoi dung co id : ${deleteStudent.id} co ten : ${deleteStudent.name}`)
// const updateProduct = element.stock;
// element.stock += quantity;
// console.log(`cap nhat thanh cong id : ${element.id}
// stock tu ${updateProduct} thanh ${element.stock}`)
// neu muon console.log nhung phan cu thi truoc khi xuly se gan bien cho phan can xu ly -> phan truoc xuly (cu) la deleteStudent (updateProduct), phan sau khi xuly (moi) se la element (element.stock), phan xuly se la dong thu 2
// neu khong gan thi phan tu cu se khong lay ra duoc de console.log
