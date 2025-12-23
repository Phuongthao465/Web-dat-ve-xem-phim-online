# 🎬 WEB ĐẶT VÉ XEM PHIM ONLINE

## 📌 Giới thiệu
Dự án **Web Đặt Vé Xem Phim Online** mô phỏng quy trình đặt vé xem phim trực tuyến:

**Xem phim → Chọn suất chiếu → Chọn ghế → Thanh toán → Xem hóa đơn**

Dự án phục vụ mục đích học tập, giúp sinh viên:
- Thực hành quy trình phát triển phần mềm
- Làm việc nhóm theo mô hình Agile / Scrum
- Sử dụng Git / GitHub để quản lý mã nguồn
- Xây dựng ứng dụng web có **frontend + backend + database**

---

## 👩‍🏫 Giảng viên hướng dẫn
- **Giảng viên**: ThS. Trần Văn Long  
- **Môn học**: Công nghệ phần mềm  
- **Ngành**: Hệ thống Thông tin  

---

## 👥 Thành viên nhóm

| STT | Họ và tên | Vai trò |
|----|-----------|--------|
| 1 | **Nguyễn Thị Phương Thảo** | **Nhóm trưởng** |
| 2 | Nguyễn Hoài Phương | Thành viên |
| 3 | Hoàng Thị Tâm | Thành viên |
| 4 | Trần Thanh Hà | Thành viên |

🔹 Nhóm trưởng chịu trách nhiệm quản lý tiến độ và merge code vào nhánh `main`.  
🔹 Mỗi thành viên làm việc trên **nhánh Git riêng**, sau đó merge vào `main`.

---

## 🛠 Công nghệ sử dụng

### Frontend
- HTML, CSS: Xây dựng giao diện
- JavaScript: Xử lý logic đặt vé, điều hướng trang

### Backend
- PHP (SQLSRV): Xử lý nghiệp vụ hóa đơn
- SQL Server: Lưu trữ dữ liệu hóa đơn
- XAMPP (Apache): Chạy web server local

### Công cụ hỗ trợ
- Git & GitHub: Quản lý mã nguồn
- Trello: Quản lý Sprint & User Story

---

## 🎯 Chức năng chính
- Xem danh sách phim
- Xem chi tiết phim
- Chọn suất chiếu và ghế ngồi
- Thanh toán (mô phỏng)
- **Lưu hóa đơn vào SQL Server**
- **Xem lịch sử hóa đơn (backend thật)**

---

## ⚙️ Cách chạy dự án

### 🔹 Cách 1: Chạy giao diện (Frontend)
Dùng cho các trang:
- `index.html`
- `detail.html`
- `payment.html`

```bash
Mở project bằng VS Code
Chuột phải index.html → Open with Live Server

🔹 Cách 2: Chạy đầy đủ Backend + Invoice (BẮT BUỘC)
Dùng cho:invoice.html. Các API PHP
Yêu cầu:
Cài XAMPP
Cài SQL Server
Bật Apache
Chạy bằng trình duyệt:

http://localhost/Web-dat-ve-xem-phim-online/index.html
http://localhost/Web-dat-ve-xem-phim-online/invoice.html


📌 Trang invoice.html sử dụng backend PHP nên bắt buộc chạy qua Apache.

📌 Ghi chú
Dữ liệu hóa đơn được lưu thực tế trong SQL Server
Dự án chạy local phục vụ mục đích học tập