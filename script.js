// Hàm giả lập đăng nhập
function loginUser() {
    const username = prompt("Nhập tên người dùng:");
    if (username) {
        // Lưu tên người dùng vào sessionStorage (hoặc localStorage nếu muốn lâu dài)
        sessionStorage.setItem("username", username);
        updateUI();
    }
}

// Hàm đăng xuất
function logoutUser() {
    if (confirm("Bạn có chắc muốn đăng xuất?")) {
        sessionStorage.removeItem("username"); // Xóa thông tin đăng nhập
        updateUI();
    }
}

// Hàm cập nhật giao diện dựa trên trạng thái đăng nhập
function updateUI() {
    const username = sessionStorage.getItem("username");
    const loginItem = document.getElementById("login-item");
    const registerItem = document.getElementById("register-item");
    const userItem = document.getElementById("user-item");
    const usernameDisplay = document.getElementById("username-display");

    if (username) {
        // Ẩn mục Đăng nhập và Đăng ký, hiển thị tên người dùng
        loginItem.style.display = "none";
        registerItem.style.display = "none";
        userItem.style.display = "block";
        usernameDisplay.textContent = username;
    } else {
        // Hiển thị lại Đăng nhập và Đăng ký nếu chưa đăng nhập
        loginItem.style.display = "block";
        registerItem.style.display = "block";
        userItem.style.display = "none";
    }
}

// Kiểm tra trạng thái đăng nhập khi tải trang
window.onload = updateUI;
