// // document.getElementById('ten_id')
// const $idHeading = document.getElementById('heading')
// console.log($idHeading)

// // document.getElementsByTagName('ten_the')
// console.log(document.getElementsByTagName('h1'))

// // document.getElementsByClassName('ten_class')
// console.log(document.getElementsByClassName('heading'))

// // document.querySelector('selector')
// console.log(document.querySelector('h1#heading'))
// console.log(document.querySelector('div.heading'))

// // document.querySelectorAll('selector')
// console.log(document.querySelectorAll('div'))



const $h1 = document.getElementById('heading')
// // .innerHTML
// $h1.innerHTML = '<a hnef = "#">h1 updated</a>'
// phân biệt đc thẻ và nội dung
// . innerText
// $h1.innerText = '<a hnef = "#">h1 updated</a>'
// thay đổi nội dung văn bản bên trong

const $a = document.getElementById('tagA')

//thay đổi giá trị attribute
$a.href = "https://github.com/"
$a.setAttribute('data-id', 200)

//lấy giá trị attribute
console.log($a.href)
console.log($a.getAttribute('data-id'))

// xóa thuộc tính
$a.removeAttribute('data-id')

// thao tác với style

$a.style.color = 'red'
$a.style.fontSize = '32px'

// a.remove();

//tạo thẻ h2 có id = subtitle có nd xcth
const $h2 = document.createElement('h2');   //tạo thể h2
$h2.innerText = 'Hello World'               //thay đổi nd thẻ h2 vừa tạo
$h2.id = 'sub-title';                       //Thêm id cho thẻ h2

document.body.appendChild($h2)              //thêm h2 vào vị trí cuối trong thẻ body



$a.classList.add('link');
$a.classList.remove('test');
$a.classList.toggle('abc')