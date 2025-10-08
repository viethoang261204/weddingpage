# 💍 Wedding Website - Tối Giản

Website thiệp cưới đơn giản, đẹp mắt và dễ sử dụng.

## 🚀 Chạy dự án

### Development (Khuyến nghị)
```bash
npm install
npm run dev
```
Mở trình duyệt: `http://localhost:8080`

### Production
```bash
npm run build
npm start
```

## ✨ Tính năng

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme
- ✅ Đếm ngược thời gian
- ✅ Nhạc nền
- ✅ Video câu chuyện tình yêu
- ✅ Album ảnh carousel
- ✅ Hiệu ứng tuyết rơi
- ✅ Hiệu ứng confetti
- ✅ Google Maps tích hợp
- ✅ Thông tin chuyển khoản/momo

## 📝 Tùy chỉnh nội dung

### 1. Thông tin cơ bản
Chỉnh sửa file `index.html`:

**Tên cô dâu chú rể:**
```html
<h2>Thanh Phương &amp; Khương Huy</h2>
```

**Ngày cưới:**
```html
<body data-time="2025-11-23 11:30:00">
```

**Địa điểm:**
```html
<a href="https://maps.app.goo.gl/uD8V7j4sdS9Pvkb39">
<small>Ấp 4, X.Thạnh trị, T.Vĩnh Long</small>
```

### 2. Hình ảnh

Thay thế các file trong `assets/images/`:
- `bg.webp` - Ảnh nền chính
- `cowo.webp` - Ảnh chú rể
- `cewe.webp` - Ảnh cô dâu
- `donate.png` - QR Code Momo

### 3. Nhạc nền

Thay file `assets/music/married.mp3` bằng nhạc yêu thích.

### 4. Video

Thay file `assets/video/265501_tiny.mp4` bằng video của bạn.

### 5. Thông tin chuyển khoản

Sửa trong `index.html`:
```html
<p>Thanh Phương</p>
<p>Tiên Phong Bank - TPBank</p>
<p>0945512895</p>
```

## 🎨 Theme

Website hỗ trợ 2 theme:
- 🌞 Light mode
- 🌙 Dark mode

Người dùng có thể chuyển đổi bằng nút ở góc dưới bên phải.

## 📱 URL Parameters

Thêm tên khách mời vào URL:
```
https://your-website.com/?to=Anh+Chị+Nguyễn+Văn+A
```

## 🌐 Deploy

### Render.com (Miễn phí)
1. Push code lên GitHub
2. Vào [render.com](https://render.com) → New Static Site
3. Connect GitHub repository
4. Build command: `npm run build:public`
5. Publish directory: `public`

### Netlify/Vercel
Tương tự, chọn:
- Build command: `npm run build:public`
- Publish directory: `public`

## 📦 Cấu trúc project

```
wedding-website/
├── assets/          # Hình ảnh, nhạc, video
│   ├── images/
│   ├── music/
│   └── video/
├── css/            # Styles
├── js/             # JavaScript (1 file duy nhất)
│   └── guest.js
├── dist/           # Build output
├── index.html      # Trang chính
└── package.json
```

## 🛠️ Công nghệ

- Vanilla JavaScript (không framework phức tạp)
- Bootstrap 5.3
- Font Awesome 7
- esbuild (bundler siêu nhanh)

## 💡 Lưu ý

- Dự án đã được tối giản hoàn toàn
- Không có backend API
- Không có database
- Phù hợp cho thiệp cưới đơn giản, không cần form gửi lời chúc online

## 📄 License

MIT License - Sử dụng tự do cho mục đích cá nhân.

---

💕 **Chúc bạn có một đám cưới thật hạnh phúc!** 🎊

