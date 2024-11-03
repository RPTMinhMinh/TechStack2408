// type student = {
//     name: string,
//     age: number
// }

// const student1: student = {
//     name: "abc",
//     age: 18
// }
// const student2: student = {
//     name: "abcd",
//     age: 20
// }

// const students: student[] = []

// console.log(student1)
// console.log(student2)
// console.log(students)


// let tuple1: [string, number, string] = ["nguyen van a" , 19, "boi"]
// console.log(tuple1);
// let tuple2: [string, number, string?] = ["nguyen van b" , 19, "boi"]
// let tuple3: [string, number, string?] = ["nguyen van ac" , 19]
// console.log(tuple2)
// console.log(tuple3)

// enum color {
//     red = "red",
//     green = "green",
//     blue = "blue"
// }
// console.log(color.blue)

// enum days {
//     monday = 2,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday
// }
// console.log(days.friday)

let str: unknown = "abc"

let str1: string = str as string

let number: number = str as number

console.log(str1)
console.log(number)


