// const listStudent = [
//     {
//         id: 1,
//         name: "Tran Van A",
//         birthday: '1/1/2003',
//         gender: 'boy',
//         mathScore: 9,
//         englishScore: 5,
//         literatureScore: 6
//     },
//     {
//         id: 2,
//         name: "Nguyen Van B",
//         birthday: "15/5/2002",
//         gender: "boy",
//         mathScore: 7,
//         englishScore: 8,
//         literatureScore: 9
//     },
//     {
//         id: 3,
//         name: "Le Thi C",
//         birthday: "20/10/2001",
//         gender: "girl",
//         mathScore: 6,
//         englishScore: 7,
//         literatureScore: 8
//     },
//     {
//         id: 4,
//         name: "Pham Van D",
//         birthday: "30/12/2000",
//         gender: "boy",
//         mathScore: 8,
//         englishScore: 6,
//         literatureScore: 7
//     },
//     {
//         id: 5,
//         name: "Tran Thi E",
//         birthday: "5/3/2003",
//         gender: "girl",
//         mathScore: 9,
//         englishScore: 9,
//         literatureScore: 10
//     }
// ]

let valueLocalStorage = localStorage.getItem('student');
valueLocalStorage = JSON.parse(valueLocalStorage);
if(valueLocalStorage === null){
    valueLocalStorage = [];
}
const listStudent = valueLocalStorage;

const $tbody = document.getElementById('tbody');
const $id = document.getElementById('id');
const $name = document.getElementById('name')
const $birthday = document.getElementById('birthday')
const $gender = document.getElementById('gender')
const $math = document.getElementById('math')
const $english = document.getElementById('english')
const $literature = document.getElementById('literature')

const $btnCreateStudent = document.getElementById('create-student')
const $btnSearch = document.getElementById('search')
const $btnUpdateStudent = document.getElementById('update-student')

const $keyword = document.getElementById('keyword')
const $sort = document.getElementById('sort')

function renderInfoStudent(data) {
    if (data === undefined) {
        data = listStudent;
    }
    let htmlStudent = '';
    for (let i = 0; i < data.length; i++) {
        const studentCurrent = data[i]
        htmlStudent += `
                    <tr>
                        <th scope="row">${studentCurrent.id}</th>
                        <td>${studentCurrent.name}</td>
                        <td>${studentCurrent.birthday}</td>
                        <td>${studentCurrent.gender === 'boy' ? 'Male' : 'Female'}</td>
                        <td>${studentCurrent.mathScore}</td>
                        <td>${studentCurrent.englishScore}</td>
                        <td>${studentCurrent.literatureScore}</td>
                        <td>
                            <button onclick="getAndShowInfoStudent(${studentCurrent.id})" type="button" class="btn btn-success" style="margin-right: 4px;">Update</button>
                            <button onclick="deleteStudent(${studentCurrent.id})" type="button" class="btn btn-danger" style="margin-left: 4px;">Delete</button>
                        </td>
                    </tr>
        `;
    }
    $tbody.innerHTML = htmlStudent;
}

function resetInput() {
    $id.value = '';
    $name.value = '';
    $birthday.value = '';
    $gender.value = 'default';
    $math.value = '';
    $english.value = '';
    $literature.value = '';

}

function createStudent() {
    const id = Number($id.value);
    const name = $name.value;
    const birthday = $birthday.value;
    const gender = $gender.value;
    const math = $math.value;
    const english = $english.value;
    const literature = $literature.value;

    const newStudent = {
        id: id,
        name: name,
        birthday: birthday,
        gender: gender,
        mathScore: math,
        englishScore: english,
        literatureScore: literature
    }
    listStudent.push(newStudent);
    resetInput()
    renderInfoStudent();

    localStorage.setItem('student', JSON.stringify(listStudent))
}
$btnCreateStudent.onclick = createStudent;

function deleteStudent(id) {
    let index = -1;
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].id == id) {
            index = i;
        }
    }
    listStudent.splice(index, 1)
    renderInfoStudent();

    localStorage.setItem('student', JSON.stringify(listStudent))
}

function searchStudent() {
    const keyword = $keyword.value;
    const result = [];
    for (let student of listStudent) {
        if (student.name.toLowerCase().trim().includes(keyword.toLowerCase().trim()) || student.id == keyword) {
            result.push(student);
        }
    }
    renderInfoStudent(result);
}
$btnSearch.onclick = searchStudent;

const sortMathScore = () => {
    const sort = $sort.value
    listStudent.sort((a, b) => {
        if (sort === 'math_asc') {
            return a.mathScore - b.mathScore;
        } else if (sort === 'math_des') {
            return b.mathScore - a.mathScore;
        } else if (sort === 'eng_asc') {
            return a.englishScore - b.englishScore;
        } else if (sort === 'eng_des') {
            return b.englishScore - a.englishScore;
        } else if (sort === 'lit_asc') {
            return a.literatureScore - b.literatureScore;
        } else {
            return b.literatureScore - a.literatureScore;
        }
    })

    renderInfoStudent()
}
$sort.onchange = sortMathScore;

function getAndShowInfoStudent(id) {
    let result = []
    for (let student of listStudent) {
        if (student.id === id) {
            result = student;
            break;
        }
    }
    $id.value = result.id
    $name.value = result.name
    $birthday.value = result.birthday
    $gender.value = result.gender
    $math.value = result.mathScore
    $english.value = result.englishScore
    $literature.value = result.literatureScore

    $btnCreateStudent.style.display = 'none';
    $btnUpdateStudent.style.display = 'inline-block'
    $id.disabled = true;
}

function updateStudent() {
    const id = Number($id.value);
    const name = $name.value;
    const birthday = $birthday.value;
    const gender = $gender.value;
    const math = $math.value;
    const english = $english.value;
    const literature = $literature.value;

    let index = -1;
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].id === id) {
            index = i;
        }
    }
    listStudent[index].name = name;
    listStudent[index].birthday = birthday;
    listStudent[index].gender = gender;
    listStudent[index].mathScore = math;
    listStudent[index].englishScore = english;
    listStudent[index].literatureScore = literature;

    renderInfoStudent();
    resetInput();
    $btnUpdateStudent.style.display = 'none';
    $btnCreateStudent.style.display = 'inline-block'
    $id.disabled = false;

    localStorage.setItem('student', JSON.stringify(listStudent));
}
$btnUpdateStudent.onclick = updateStudent;

renderInfoStudent();


