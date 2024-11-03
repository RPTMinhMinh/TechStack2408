"use strict";
// 2. Tạo một mảng scores kiểu ScoreData[] để chứa dữ liệu điểm của các học sinh.
const scores = [
    { studentId: 1, subject: 'Toán', score: 85 },
    { studentId: 2, subject: 'Toán', score: 90 },
    { studentId: 1, subject: 'Lý', score: 78 },
    { studentId: 2, subject: 'Lý', score: 88 },
    { studentId: 3, subject: 'Toán', score: 95 },
    { studentId: 3, subject: 'Lý', score: 92 },
];
// 3. Viết hàm calculateAverageScoreBySubject nhận vào tên môn học và tính điểm trung bình của môn đó.
function calculateAverageScoreBySubject(subjectName) {
    let sum = 0;
    let total = 0;
    // let score: ScoreData | null = null
    const generalSubject = [];
    for (let element of scores) {
        if (element.subject.toLowerCase().trim().includes(subjectName.toLowerCase().trim())) {
            generalSubject.push(element);
        }
    }
    for (let element of generalSubject) {
        sum += element.score;
    }
    if (generalSubject.length > 0) {
        total = sum / generalSubject.length;
        console.log(`diem trung binh mon ${generalSubject[0].subject} la : `, total);
    }
    else {
        console.log(`khong tim thay ten mon ${subjectName}`);
    }
}
calculateAverageScoreBySubject("Toá");
console.log(`----------------------------------------------------`);
// 4. Viết hàm getTopScorerBySubject nhận vào tên môn học và trả về học sinh có điểm cao nhất trong môn đó.
//duyet mang de lay mon hoc
//duyet mang de lay diem cao nhat trong mon hoc
function getTopScorerBySubject(subjectName) {
    let generalSubject = [];
    for (let element of scores) {
        if (element.subject.toLowerCase().trim().includes(subjectName.toLowerCase().trim())) {
            generalSubject.push(element);
        }
    }
    if (generalSubject.length > 0) {
        let maxScore = generalSubject[0];
        for (let i = 0; i < generalSubject.length; i++) {
            if (generalSubject[i].score > maxScore.score) {
                maxScore = generalSubject[i];
            }
        }
        console.log(`Diem cao nhat mon ${subjectName} la : `, maxScore.score);
        console.log(maxScore);
    }
    else {
        console.log(`khong tim thay mon : `, subjectName);
    }
}
getTopScorerBySubject("Lý");
console.log(`----------------------------------------------------`);
// 5. Viết hàm getStudentScores nhận vào mã sinh viên và trả về toàn bộ điểm của sinh viên đó theo từng môn học.
function getStudentScores(id) {
    // let check: boolean = false;
    let student = [];
    for (let element of scores) {
        if (element.studentId === id) {
            student.push(element);
            // check = true
            // console.log(element)
        }
    }
    // if(!check){
    //     console.log(`khong tim thay sinh vien co id: `, id)
    // }
    if (student.length > 0) {
        console.log(student);
    }
    else {
        console.log(`khong tim thay sinh vien co id: `, id);
    }
}
getStudentScores(1);
console.log(`----------------------------------------------------`);
