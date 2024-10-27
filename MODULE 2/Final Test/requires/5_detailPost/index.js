const $btnSearch = document.getElementById('search');
const $keyword = document.getElementById('keyword');
const $tbody = document.getElementById('tbody');

function renderPost(data) {
    if (data === undefined) {
        data = posts;
    }
    let htmlPost = ''
    for (let i = 0; i < data.length; i++) {
        const postCurrent = data[i];
        let userFirstName = '';
        let userLastName = '';
        for (let j = 0; j < users.length; j++) {
            if (users[j].id === postCurrent.user_id) {
                userFirstName = users[j].first_name;
                userLastName = users[j].last_name;
                break;
            }
        }
        htmlPost += `
        <tr>
        <th scope="row">${postCurrent.id}</th>
        <td>${postCurrent.title}</td>
        <td>${postCurrent.content}</td>
        <td>${postCurrent.image}</td>
        <td>${userFirstName}</td>
        <td>${userLastName}</td>
        <td>${postCurrent.created_at}</td>
        <td>${postCurrent.updated_at}</td>
    </tr>
    `;
    }
    $tbody.innerHTML = htmlPost;
}

// b1: tạo hàm detailPost()
function detailPost() {
    // b2: lấy ra giá trị của keyword vừa nhập
    const keyword = Number($keyword.value.trim())
    // b3: tạo mảng rỗng và biến check để kiểm tra
    let result = [];
    let check = false;
    // b4: duyệt mảng posts
    for (let post of posts) {
        //     -> nếu có id : hiển thị
        if (post.id === keyword) {
            check = true;
            result.push(post);
        }
    }
    //     -> để trống : hiển thị tất cả
    if (!check) {
        result = posts;
    }
    renderPost(result);
    $keyword.value = '';
}

// b5: gán hàm cho button tương ứng
$btnSearch.onclick = detailPost;