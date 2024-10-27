const $keyword = document.getElementById('keyword')
const $btnSearch = document.getElementById('search')
const $tbody = document.getElementById('tbody');

function renderPost(data) {
    if (data === undefined) {
        data = posts;
    }
    let htmlPost = '';
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


function searchPost() {
    const keyword = $keyword.value.trim().toLowerCase();
    let result = [];
    let userId = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() === keyword) {
            userId = users[i].id;
            break;
        }
    }
    if (userId !== null) {
        for (let j = 0; j < posts.length; j++) {
            if (posts[j].user_id === userId) {
                result.push(posts[j]); 
            }
        }
    } else {
        alert('Không tìm thấy người dùng với email này.');
    }
    renderPost(result);
    $keyword.value = '';
}

$btnSearch.onclick = searchPost