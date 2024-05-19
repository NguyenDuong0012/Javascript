// Hàm gọi API để lấy dữ liệu sản phẩm
function getUser(callback) {
    fetch('https://660d3de56ddfa2943b33b390.mockapi.io/api/BT/user')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Hàm gọi API để xóa người dùng
function deleteUser(userId, callback) {
    fetch(`https://660d3de56ddfa2943b33b390.mockapi.io/api/BT/user/${userId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Lỗi khi xóa người dùng');
        }
        return response.json();
    })
    .then(data => {
        callback(null, data);
    })
    .catch(error => {
        callback(error, null);
    });
}
// Hàm gọi API để cập nhật thông tin của người dùng
function updateUser(userId, userData, callback) {
    fetch(`https://660d3de56ddfa2943b33b390.mockapi.io/api/BT/user/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Lỗi khi cập nhật người dùng');
        }
        return response.json();
    })
    .then(data => {
        callback(null, data);
    })
    .catch(error => {
        callback(error, null);
    });
}
// Hàm gọi API để lấy thông tin người dùng dựa trên ID
function getUserById(userId, callback) {
    fetch(`https://660d3de56ddfa2943b33b390.mockapi.io/api/BT/user/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi khi lấy thông tin người dùng');
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Hàm hiển thị form chỉnh sửa thông tin người dùng
function showEditForm(userId) {
    // Tạo overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Tạo container cho form chỉnh sửa
    const formContainer = document.createElement('div');
    formContainer.classList.add('edit-form');
    formContainer.innerHTML = `
        <h3>Chỉnh sửa thông tin người dùng</h3>
        <form id="editForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <br>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
            <br>
            <label for="password">Password:</label>
            <input type="text" id="password" name="password">
            <br>
            <button type="submit" class="btn btn-primary">Lưu</button>
            <button type="button" class="btn btn-secondary close-btn">Đóng</button>
        </form>
    `;

    // Append form vào overlay
    overlay.appendChild(formContainer);
    document.body.appendChild(overlay);

    // Gọi API để lấy thông tin của người dùng và điền vào form
    getUserById(userId, (error, userData) => {
        if (error) {
            console.error('Lỗi khi lấy thông tin người dùng:', error);
            alert('Đã có lỗi xảy ra khi lấy thông tin người dùng!');
        } else {
            const editForm = formContainer.querySelector('#editForm');
            editForm.elements.name.value = userData.name;
            editForm.elements.username.value = userData.username;
            editForm.elements.password.value = userData.password;
        }
    });

    // Sự kiện click nút "Lưu"
    formContainer.querySelector('#editForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const editForm = event.target;
        const updatedUserData = {
            name: editForm.elements.name.value,
            username: editForm.elements.username.value,
            password: editForm.elements.password.value
        };
        updateUser(userId, updatedUserData, (error, updatedUser) => {
            if (error) {
                console.error('Lỗi khi cập nhật người dùng:', error);
                alert('Đã có lỗi xảy ra khi cập nhật thông tin người dùng!');
            } else {
                // Cập nhật dữ liệu người dùng trên giao diện
                const userRow = document.querySelector(`#userTableBody tr[data-id="${userId}"]`);
                userRow.innerHTML = `
                    <td>${updatedUser.id}</td>
                    <td>${updatedUser.name}</td>
                    <td>${updatedUser.username}</td>
                    <td>${updatedUser.password}</td>
                    <td>
                        <button class="btn btn-primary edit-btn" data-id="${updatedUser.id}">Sửa</button>
                        <button class="btn btn-danger delete-btn" data-id="${updatedUser.id}">Xóa</button>
                    </td>
                `;
                // Hiển thị thông báo cập nhật thành công
                alert('Đã cập nhật thông tin người dùng thành công!');
            }
            // Xóa overlay và form sau khi sửa xong
            overlay.remove();
        });
    });

    // Sự kiện click nút "Đóng"
    formContainer.querySelector('.close-btn').addEventListener('click', () => {
        // Xóa overlay và form khi nút "Đóng" được nhấn
        overlay.remove();
    });
}

// Cập nhật phần đăng ký sự kiện cho nút "Xóa" và "Sửa" trong hàm handleUser
function handleUser(error, data) {
    if (error) {
        console.error('Lỗi khi lấy dữ liệu người dùng:', error);
    } else {
        const userTableBody = document.getElementById('userTableBody');
        data.forEach(user => {
            const row = `<tr data-id="${user.id}">
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>
                    <button class="btn btn-primary edit-btn" data-id="${user.id}">Sửa</button>  
                    <button class="btn btn-danger delete-btn" data-id="${user.id}">Xóa</button>
                </td>
            </tr>`;
            userTableBody.innerHTML += row;
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const userId = button.getAttribute('data-id');
                // Gọi hàm deleteUser khi nhấn nút "Xóa"
                deleteUser(userId, (error) => {
                    if (error) {
                        console.error('Lỗi khi xóa người dùng:', error);
                        alert('Đã có lỗi xảy ra khi xóa người dùng!');
                    } else {
                        // Xóa hàng dữ liệu tương ứng trên giao diện
                        const rowToDelete = document.querySelector(`#userTableBody tr[data-id="${userId}"]`);
                        if (rowToDelete) {
                            rowToDelete.remove();
                        }
                        // Hiển thị thông báo xóa thành công
                        alert('Đã xóa người dùng thành công!');
                    }
                });
            });
        });

        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                const userId = button.getAttribute('data-id');
                // Gọi hàm showEditForm khi nhấn nút "Sửa"
                showEditForm(userId);
            });
        });
    }
}

// Gọi hàm getUser với callback handleUser
getUser(handleUser);
