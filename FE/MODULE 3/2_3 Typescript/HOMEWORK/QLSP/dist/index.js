"use strict";
// 2. Tạo một mảng products kiểu Product[] chứa một số sản phẩm mẫu.
const products = [
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
    },
];
// 3. Viết hàm addProduct để thêm một sản phẩm mới vào danh sách.
function addProduct(add) {
    products.push(add);
    console.log(`thêm một sản phẩm mới vào danh sách thanh cong : `, add);
    console.log(products);
}
addProduct({ id: 6, name: "San Pham F", price: 350000, stock: 25 });
console.log(`---------------------`);
// 4. Viết hàm findProductById để tìm sản phẩm theo mã sản phẩm.
function findProductById(findByID) {
    let check = false;
    for (let element of products) {
        if (element.id === findByID) {
            check = true;
            console.log(`sản phẩm theo mã sản phẩm : `, element.id);
            console.log(element);
            break;
        }
    }
    if (!check) {
        console.log(`khum tim thay id : ${findByID}`);
    }
}
findProductById(3);
console.log(`---------------------`);
// 5. Viết hàm updateStock nhận vào mã sản phẩm và số lượng cần thêm/xoá và cập nhật lại stock của sản phẩm.
function updateStock(idProduct, quantity) {
    let check = false;
    for (let element of products) {
        if (element.id === idProduct) {
            check = true;
            const updateProduct = element.stock;
            element.stock += quantity;
            console.log(`cap nhat thanh cong id : ${element.id}
stock tu ${updateProduct} thanh ${element.stock}`);
            console.log(products);
            break;
        }
    }
    if (!check) {
        console.log(`khum tim thay id :`, idProduct);
    }
}
updateStock(5, 15);
console.log(`---------------------`);
// 6. Viết hàm calculateTotalInventoryValue để tính tổng giá trị tồn kho của tất cả sản phẩm.
function calculateTotalInventoryValue() {
    let sum = 0;
    for (let element of products) {
        sum += element.stock;
    }
    console.log(`tổng giá trị tồn kho của tất cả sản phẩm la:`, sum);
}
calculateTotalInventoryValue();
