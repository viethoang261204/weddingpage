# 🎯 Hướng Dẫn Sử Dụng Trang Admin

## 📋 Giới thiệu

Trang admin cho phép bạn tạo link thiệp cưới cá nhân hóa cho từng khách mời. Mỗi link sẽ hiển thị tên khách mời trên thiệp.

## 🚀 Cách Sử Dụng

### 1. Truy cập trang Admin

Mở trình duyệt và truy cập:
```
http://localhost:8080/admin.html
```

Hoặc sau khi deploy:
```
https://your-website.com/admin.html
```

### 2. Tạo Link Thiệp Mời

1. **Nhập tên khách mời** vào ô "Tên Khách Mời"
   - Ví dụ: `Anh Chị Nguyễn Văn A`
   - Ví dụ: `Bác Trần Thị B`
   - Ví dụ: `Cô Dâu Phạm Thị C`

2. Click nút **"Tạo Link Thiệp"**

3. Link sẽ được tạo tự động với format:
   ```
   https://your-website.com/index.html?to=Anh+Chị+Nguyễn+Văn+A
   ```

### 3. Chia Sẻ Link

Sau khi tạo link, bạn có 2 cách:

**Cách 1: Copy Link**
- Click nút **"Copy Link"**
- Paste vào Zalo, Facebook, SMS, Email...

**Cách 2: Mở Trực Tiếp**
- Click nút **"Mở Thiệp"**
- Xem trước thiệp với tên khách mời

### 4. Quản Lý Danh Sách

**Xem thống kê:**
- Số lượng khách mời
- Số link đã tạo

**Danh sách khách mời:**
- Xem tất cả khách mời đã tạo
- Thời gian tạo
- Copy link nhanh
- Mở thiệp
- Xóa từng khách

**Xóa tất cả:**
- Click nút "Xóa Tất Cả" để reset

## 💾 Lưu Trữ

- Danh sách khách mời được lưu trong **localStorage** của trình duyệt
- Dữ liệu tồn tại ngay cả khi tắt trình duyệt
- **Lưu ý:** Nếu xóa cache trình duyệt, dữ liệu sẽ mất

## 🎨 Ví Dụ Sử Dụng

### Ví dụ 1: Gửi thiệp cho bạn bè
```
Tên: Anh Chị Minh Tuấn
Link: https://your-wedding.com/index.html?to=Anh+Chị+Minh+Tuấn
```

Khi khách mời mở link, họ sẽ thấy:
> **"Anh Chị Minh Tuấn"** trên trang welcome

### Ví dụ 2: Gửi thiệp cho gia đình
```
Tên: Bác Nguyễn Văn Hùng
Link: https://your-wedding.com/index.html?to=Bác+Nguyễn+Văn+Hùng
```

### Ví dụ 3: Gửi thiệp cho đồng nghiệp
```
Tên: Team Marketing
Link: https://your-wedding.com/index.html?to=Team+Marketing
```

## 📱 Gửi Link Qua

### Zalo
1. Copy link từ admin
2. Paste vào chat Zalo
3. Gửi kèm lời mời

### Facebook Messenger
1. Copy link
2. Paste vào Messenger
3. Gửi cho bạn bè

### SMS
1. Copy link
2. Mở ứng dụng tin nhắn
3. Paste và gửi

### Email
1. Copy link
2. Soạn email mời
3. Paste link vào email

## 🔒 Bảo Mật

- Trang admin **KHÔNG có mật khẩu**
- Nếu cần bảo mật:
  1. Đặt file `admin.html` trong thư mục riêng
  2. Chỉ truy cập trên máy cá nhân
  3. Không chia sẻ link admin

## 💡 Tips

1. **Đặt tên rõ ràng:**
   - Tốt: `Anh Chị Nguyễn Văn A`
   - Tránh: `A`, `Person 1`

2. **Nhóm khách:**
   - `Gia đình nhà gái`
   - `Gia đình nhà trai`
   - `Bạn bè đại học`
   - `Đồng nghiệp công ty`

3. **Kiểm tra trước khi gửi:**
   - Click "Mở Thiệp" để xem trước
   - Đảm bảo tên hiển thị đúng

4. **Backup danh sách:**
   - Export danh sách định kỳ
   - Lưu vào Excel hoặc Google Sheets

## 🆘 Xử Lý Lỗi

**Link không hoạt động?**
- Kiểm tra URL có đúng không
- Đảm bảo website đang online

**Tên không hiển thị?**
- Kiểm tra link có `?to=TenKhach` không
- Thử tạo lại link

**Mất danh sách?**
- Nếu xóa cache trình duyệt, dữ liệu sẽ mất
- Luôn backup danh sách quan trọng

---

## 📞 Support

Nếu cần hỗ trợ, liên hệ:
- 📧 Email: your-email@example.com
- 📱 Phone: 0123456789

---

**💕 Chúc bạn có một đám cưới thật hạnh phúc!**

