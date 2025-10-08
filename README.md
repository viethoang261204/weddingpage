# 💍 Wedding Invitation Website

Trang web thiệp cưới điện tử đẹp mắt, hiện đại và dễ sử dụng.

## 🎨 Demo

- **Trang chính**: [https://your-domain.com/trangchu/](https://your-domain.com/trangchu/)
- **Admin Panel**: [https://your-domain.com/login/](https://your-domain.com/login/)

## ✨ Tính năng

### 🎯 Dành cho khách mời:
- ✅ Thiệp cưới điện tử với hiệu ứng đẹp mắt
- ✅ Countdown đến ngày cưới
- ✅ Thông tin sự kiện chi tiết (nhà gái, nhà trai, hôn lễ)
- ✅ Google Maps tích hợp
- ✅ Gallery ảnh cưới
- ✅ Gửi lời chúc phúc
- ✅ Thông tin chuyển khoản với QR code
- ✅ Nhạc nền tự động
- ✅ Hiệu ứng tuyết rơi & confetti
- ✅ Dark/Light mode
- ✅ Responsive - hoạt động mượt trên mọi thiết bị

### 👨‍💼 Dành cho admin:
- ✅ Tạo link thiệp cá nhân hóa cho từng khách mời
- ✅ Mã hóa Base64 để bảo mật
- ✅ Dashboard quản lý lời chúc
- ✅ Phân trang (5 lời chúc/trang)
- ✅ Lọc theo trạng thái tham dự
- ✅ Tìm kiếm lời chúc
- ✅ Export CSV
- ✅ Thống kê số lượng khách mời
- ✅ Đăng nhập bảo mật

## 🚀 Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: esbuild
- **CSS Framework**: Bootstrap 5
- **Icons**: Font Awesome
- **Animation**: AOS (Animate On Scroll)
- **Fonts**: Google Fonts (Playfair Display, Great Vibes, Cormorant Garamond)
- **Storage**: localStorage
- **Deployment**: Render.com / Static Hosting

## 📦 Cài đặt

```bash
# Clone repository
git clone https://github.com/your-username/wedding-website.git
cd wedding-website

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Build và copy sang thư mục public
npm run build:public

# Chạy production server
npm start
```

## 🌐 Deploy lên Render.com

1. Push code lên GitHub
2. Kết nối repository với Render.com
3. Render sẽ tự động detect `render.yaml` và deploy
4. Build command: `npm run render-build`
5. Static publish path: `./public`

## 📁 Cấu trúc thư mục

```
wedding-website/
├── trangchu/           # Trang thiệp cưới chính
├── admin/              # Trang tạo link thiệp
├── dashboard/          # Dashboard quản lý lời chúc
├── login/              # Trang đăng nhập admin
├── assets/             # Ảnh, nhạc, video
├── css/                # Stylesheet
├── js/                 # JavaScript source
├── dist/               # JavaScript đã build
├── public/             # Thư mục deploy
├── package.json        # Dependencies & scripts
└── render.yaml         # Render deployment config
```

## 🔐 Thông tin đăng nhập Admin

- **URL**: `/login/`
- **Username**: `admin`
- **Password**: `1`

> ⚠️ **Lưu ý**: Đổi mật khẩu trong file `login/index.html` trước khi deploy production!

## 📝 Tùy chỉnh

### Thay đổi thông tin cưới:
Chỉnh sửa file `trangchu/index.html`:
- Tên cô dâu, chú rể
- Ngày giờ sự kiện
- Địa chỉ
- Link Google Maps
- Thông tin ngân hàng

### Thay đổi ảnh:
Upload ảnh vào thư mục `assets/images/` và cập nhật đường dẫn trong HTML.

### Thay đổi nhạc nền:
Thay file `assets/music/married.mp3` hoặc cập nhật `data-audio` trong `trangchu/index.html`.

## 🎯 URL Structure

- `/` → Redirect to `/trangchu/`
- `/trangchu/` → Trang thiệp cưới chính
- `/trangchu/?to=BASE64_ENCODED_NAME` → Thiệp cá nhân hóa
- `/admin/` → Tạo link thiệp (cần login)
- `/dashboard/` → Quản lý lời chúc (cần login)
- `/login/` → Đăng nhập admin

## 🌟 Tính năng nổi bật

### 1. Link thiệp cá nhân hóa
- Mỗi khách mời có link riêng với tên được mã hóa Base64
- Title động theo tên người nhận
- Ví dụ: `Thư mời cưới Anh Chị Nguyễn Văn A`

### 2. Phân trang thông minh
- Hiển thị 5 lời chúc/trang
- Sắp xếp mới nhất lên đầu
- Smooth scroll khi chuyển trang

### 3. Dashboard đầy đủ
- Thống kê tổng quan
- Lọc theo trạng thái
- Tìm kiếm real-time
- Export CSV

## 📱 Responsive Design

Website được tối ưu cho:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 991px)
- 🖥️ Desktop (≥ 992px)

## 🐛 Troubleshooting

### Build failed trên Render:
```bash
# Đảm bảo có script render-build trong package.json
npm run render-build
```

### Ảnh không hiển thị:
- Kiểm tra đường dẫn tương đối
- Đảm bảo file tồn tại trong `assets/images/`

### Lời chúc không lưu:
- Kiểm tra localStorage không bị block
- Thử chế độ incognito

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Phát triển bởi

**Việt Hoàng**

---

⭐ Nếu bạn thấy project hữu ích, hãy cho một star nhé!
