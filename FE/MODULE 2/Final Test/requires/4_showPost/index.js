const $tbody = document.getElementById('tbody')


// b1: tạo hàm showPost()
function showPost() {
    // b2: tạo chuỗi rỗng đại diện cho các câu lệnh html in lên màn hình
    let htmlPosts = '';
    // b3: duyệt mảng posts
    for (let i = 0; i < posts.length; i++) {
        //     -> lấy ra thông tin từng posts
        const postCurrent = posts[i];
        //     -> lấy ra thông tin user thông qua user_id;
        let userFirstName = '';
        let userLastName = '';
        for (let j = 0; j < users.length; j++) {
            if (users[j].id === postCurrent.user_id) {
                userFirstName = users[j].first_name;
                userLastName = users[j].last_name;
                break; // Dừng vòng lặp khi tìm thấy
            }
        }
        //     -> tạo ra đoạn html tương ứng để hiển thị thông tin posts
        htmlPosts += `
        <tr>
        <th scope="row">${postCurrent.id}</th>
        <td>${postCurrent.title}</td>
        <td>${postCurrent.created_at}</td>
        <td>${userFirstName}</td>
        <td>${userLastName}</td>
    </tr>
    `;
    }
    // b4: Selector đến thẻ tbody và thay thể toàn bộ nd trong thẻ là đoạn html vừa tạo ra
    $tbody.innerHTML = htmlPosts;
}

showPost()
