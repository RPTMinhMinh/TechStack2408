const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $msg = document.getElementById('msg')
const $btnlogin = document.getElementById('login');

// b1: tạo hàm login()
function login(){
// b2: lấy thông tin người dùng vừa nhập từ email và password
    const email = $email.value.trim().toLowerCase();
    const password = $password.value; 
// b3: nếu thông tin để rỗng -> Hãy nhập đầy đủ thông tin
    if(email == '' || password == ''){
        $msg.innerHTML = 'Hãy nhập đầy đủ thông tin';
        return;
    }
// b4: duyệt mảng users để kiểm tra người dùng
    for(let user of users){
    // b5: nếu tồn tại -> Xin chào” + <tên đầy đủ của user đó
        if(user.email === email && user.password === password){
            $msg.innerHTML = 'Xin chào ' + user.first_name + ' ' + user.last_name;
            return;
        }else{
            //     nếu không tồn tại -> Thông tin tài khoản không chính xác
            $msg.innerHTML = 'Thông tin tài khoản không chính xác';
        }
    }
// b6: reset ô input
    $email.value = '';
    $password.value = '';

}
// b7: gán hàm login() cho button tương ứng
$btnlogin.onclick = login;