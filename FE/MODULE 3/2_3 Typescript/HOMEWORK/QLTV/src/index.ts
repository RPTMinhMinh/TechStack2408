// Bài 3: Quản lý sách trong thư viện
// 1. Định nghĩa một type Book với các thuộc tính:
// 	- id: number (mã sách)
// 	- title: string (tên sách)
// 	- author: string (tác giả)
// 	- isAvailable: boolean (tình trạng sách: có sẵn hay không)
type Book = {
    id: number,
    title: string,
    author: string,
    isAvailable: boolean
}
// 2. Tạo một mảng library kiểu Book[] và thêm một số sách vào thư viện
const library: Book[] = [
    { id: 1, title: "Đắc Nhân Tâm", author: "Dale", isAvailable: true },
    { id: 2, title: "Nhà Giả Kim", author: "Paulo", isAvailable: false },
    { id: 3, title: "Sapiens", author: "Yuval", isAvailable: true },
    { id: 4, title: "Kẻ Bị Duyệt", author: "Ánh", isAvailable: true },
    { id: 5, title: "Tôi Tư Duy - Tôi Đột Phá", author: "Mai", isAvailable: false },
    { id: 6, title: "hehe", author: "abc", isAvailable: true },
    { id: 7, title: "hoohooo", author: "abc", isAvailable: false }
]
// 3. Viết hàm checkOutBook nhận vào mã sách và đánh dấu isAvailable thành false nếu sách có sẵn.
function checkOutBook(idBook: number): void {
    let book: Book | null = null;
    for (let element of library) {
        if (element.id === idBook) {
            book = element;
            break;
        }
    }
    if (book !== null && book.isAvailable === true) {
        book.isAvailable = false
        console.log(`sach ${book.title} co san va muon dc`);
        console.log(book)
    } else if (book !== null && book.isAvailable === false) {
        console.log(`sach ${book.title} khong co san`)
    } else {
        console.log(`khong tim thay id : `, idBook);
    }
}
checkOutBook(1)
console.log(`-------------------------------------------------------------------------`)
// 4. Viết hàm returnBook để đánh dấu sách trở về trạng thái có sẵn (isAvailable là true).
function returnBook(idBook: number): void {
    let book: Book | null = null
    for (let element of library) {
        if (element.id === idBook) {
            book = element
            break;
        }
    }
    if (book !== null && book.isAvailable === false) {
        book.isAvailable = true;
        console.log(`sach ${book.title} dc tra va co san`)
        console.log(book)
    } else if (book !== null && book.isAvailable === true) {
        console.log(`sach ${book.title} co san`)
    } else {
        console.log(`khum tim thay id: `, idBook)
    }
}
returnBook(2)
console.log(`-------------------------------------------------------------------------`)
// 5. Viết hàm findBooksByAuthor để tìm tất cả các sách của một tác giả cụ thể.
function findBooksByAuthor(authorName: string): void {
    let check: boolean = false;
    for (let element of library) {
        if (element.author.toLowerCase().trim().includes(authorName.toLowerCase().trim())) {
            check = true;
            console.log(element);
        }
    }
    if (!check) {
        console.log(`khong tim thay ten tac gia: `, authorName)
    }
}
findBooksByAuthor("abc")
console.log(`-------------------------------------------------------------------------`)
// 6. Viết hàm listAvailableBooks để trả về danh sách các sách hiện có sẵn trong thư viện.
function listAvailableBooks(): void {
    let check = false
    for (let element of library) {
        if (element.isAvailable === true) {
            check = true;
            console.log(element)
        }
    }
    if (!check) {
        console.log(`khong co sach nao co san`)
    }
}
listAvailableBooks()
console.log(`-------------------------------------------------------------------------`)

// neu 2 dk : co ton tai va khong ton tai -> lam viec trong vong lap (co ton tai) va ngoai vong lap lam viec voi (khong ton tai) (bien check)
// neu 3 dk tro len : co ton tai (true or false) va khong ton tai   -> lam viec trong vong lap va gan bien cho phan tu tim dc
//                                                                  -> ngoai vong lap bat dau xu ly dua vao bien do 