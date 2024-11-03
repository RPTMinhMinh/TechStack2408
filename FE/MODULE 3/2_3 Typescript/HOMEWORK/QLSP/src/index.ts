// Bài 2: Quản lý sản phẩm trong cửa hàng
// Tạo một ứng dụng TypeScript để quản lý sản phẩm với các yêu cầu sau:
// 1. Định nghĩa một type Product với các thuộc tính:
// 	- id: number (mã sản phẩm)
// 	- name: string (tên sản phẩm)
// 	- price: number (giá sản phẩm)
// 	- stock: number (số lượng trong kho)
type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
}
// 2. Tạo một mảng products kiểu Product[] chứa một số sản phẩm mẫu.
const products: Product[] = [
    {
        id: 1, name: "Sản phẩm A", price: 100000, stock: 50,
    },
    {
        id: 2, name: "Sản phẩm B", price: 200000, stock: 30,
    },
    {
        id: 3, name: "Sản phẩm C", price: 150000, stock: 20,
    },
    {
        id: 4, name: "Sản phẩm D", price: 300000, stock: 10,
    },
    {
        id: 5, name: "Sản phẩm E", price: 250000, stock: 0,
    },]
// 3. Viết hàm addProduct để thêm một sản phẩm mới vào danh sách.
function addProduct(add: Product):void{
    products.push(add);
    console.log(`thêm một sản phẩm mới vào danh sách thanh cong : `, add)
    console.log(products)
}
addProduct({id: 6, name: "San Pham F", price: 350000, stock: 25})
console.log(`---------------------`)
// 4. Viết hàm findProductById để tìm sản phẩm theo mã sản phẩm.
function findProductById(findByID: number): void{
    let check: boolean = false;
    for(let element of products){
        if(element.id === findByID){
            check = true
            console.log(`sản phẩm theo mã sản phẩm : `, element.id)
            console.log(element);
            break;
        }
    }
    if(!check){
        console.log(`khum tim thay id : ${findByID}`)
    }
}
findProductById(3)
console.log(`---------------------`)
// 5. Viết hàm updateStock nhận vào mã sản phẩm và số lượng cần thêm/xoá và cập nhật lại stock của sản phẩm.
function updateStock(idProduct: number, quantity: number): void{
    let check: boolean = false;
    for(let element of products){
        if(element.id === idProduct){
            check=true;
            const updateProduct = element.stock;
            element.stock += quantity;
            console.log(`cap nhat thanh cong id : ${element.id}
stock tu ${updateProduct} thanh ${element.stock}`)
            console.log(products)
            break;
        }
    }
    if(!check){
        console.log(`khum tim thay id :`, idProduct)
    }
}
updateStock(5, 15)
console.log(`---------------------`)
// 6. Viết hàm calculateTotalInventoryValue để tính tổng giá trị tồn kho của tất cả sản phẩm.
function calculateTotalInventoryValue(): void{
    let sum: number = 0;
    for(let element of products){
        sum += element.stock;
    }
    console.log(`tổng giá trị tồn kho của tất cả sản phẩm la:` ,sum);
}
calculateTotalInventoryValue()